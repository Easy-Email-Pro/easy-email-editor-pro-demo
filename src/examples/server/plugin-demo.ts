import { EditorCore, PluginManager } from "easy-email-pro-core";
import * as template from "../../Home/templates/template1.json";
import mjml from "mjml";
import fs from "fs";
import path from "path";
import { EmailTemplate } from "easy-email-pro-editor";
import { Countdown, Shopwindow } from "easy-email-pro-kit";

// register custom block
PluginManager.registerPlugins([Countdown, Shopwindow]);

const main = async () => {
  await EditorCore.auth(process.env.CLIENT_ID!);

  const pageData = template.content as EmailTemplate["content"];

  // mjmlSkeleton & htmlSkeleton can be cached
  const mjmlSkeleton = EditorCore.toMJML({
    element: pageData,
    mode: "production",
  });
  const htmlSkeleton = mjml(mjmlSkeleton).html;

  const finalHtml = PluginManager.renderWithData(htmlSkeleton, {});

  fs.writeFileSync(
    path.join(process.cwd(), "/dist/server-render-plugin-demo.html"),
    finalHtml
  );
};

main();
