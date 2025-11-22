import * as fs from "fs";
import * as path from "path";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";
import { JsonToMjml } from "easy-email-core";

import mjml from "mjml";
import { EditorCore, easyEmailToEasyEmailPro } from "easy-email-pro-core";
import puppeteer from "puppeteer";

import "./browserMock";

type IPage = Parameters<typeof easyEmailToEasyEmailPro>[0];

const getImage = async (
  html: string,
  options?: {
    width: number;
    height: number;
  }
) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(html);

  if (options) {
    page.setViewport(options);
  } else {
    // 获取页面尺寸
    const dimensions = await page.evaluate(() => {
      return {
        width: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight,
      };
    });
    page.setViewport(dimensions);
  }

  const screenshot = await page.screenshot({
    encoding: "binary",
  });

  await browser.close();
  return PNG.sync.read(screenshot);
};

const run = async () => {
  if (!fs.existsSync(path.resolve(__dirname, `./output`))) {
    fs.mkdirSync(path.resolve(__dirname, `./output`), {
      recursive: true,
    });
  }

  const files = fs.readdirSync(path.resolve(__dirname, "./templates"));

  const matchResult: Record<string, boolean> = {};

  await Promise.all(
    files.map(async (file, index) => {
      const fileName = path.basename(file, path.extname(file));
      const oldJson = JSON.parse(
        fs.readFileSync(
          path.resolve(__dirname, `./templates/${fileName}.json`),
          {
            encoding: "utf-8",
          }
        )
      );

      await EditorCore.auth(process.env.CLIENT_ID!);

      const pageElement = easyEmailToEasyEmailPro(oldJson as IPage);

      const oldHtml = mjml(
        JsonToMjml({
          data: oldJson,
          context: oldJson,
          mode: "production",
        })
      ).html;

      const oldImage = await getImage(oldHtml);

      const { width, height } = oldImage;

      const newHtml = mjml(
        EditorCore.toMJML({
          element: pageElement,
          pageElement: pageElement,
          mode: "production",
        })
      ).html;

      const newImage = await getImage(newHtml, { width, height });

      const diff = new PNG({ width, height });

      try {
        const diffPixels = pixelmatch(
          oldImage.data,
          newImage.data,
          diff.data,
          width,
          height,
          {
            threshold: 0.1,
          }
        );
        matchResult[fileName] = diffPixels === 0;

        if (diffPixels !== 0) {
          if (
            !fs.existsSync(
              path.resolve(__dirname, `./output/images/${fileName}`)
            )
          ) {
            fs.mkdirSync(
              path.resolve(__dirname, `./output/images/${fileName}`),
              {
                recursive: true,
              }
            );
          }
          fs.writeFileSync(
            path.resolve(__dirname, `./output/images/${fileName}/new.png`),
            PNG.sync.write(newImage)
          );
          fs.writeFileSync(
            path.resolve(
              __dirname,
              `./output/images/${fileName}/new_${fileName}.json`
            ),
            JSON.stringify(pageElement, null, 2)
          );

          fs.writeFileSync(
            path.resolve(__dirname, `./output/images/${fileName}/old.png`),
            PNG.sync.write(oldImage)
          );

          fs.writeFileSync(
            path.resolve(__dirname, `./output/images/${fileName}/diff.png`),
            PNG.sync.write(diff)
          );
        }
      } catch (error) {
        matchResult[fileName] = false;
      }
    })
  );

  fs.writeFileSync(
    path.resolve(__dirname, `./output/match.json`),
    JSON.stringify(matchResult)
  );
  console.log(matchResult);
};

run();
