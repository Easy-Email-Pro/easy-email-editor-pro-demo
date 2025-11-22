import { readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { BlockManager } from "easy-email-pro-core";
import { convertBlockToImage } from "../../packages/easy-email-pro-core/mcp/tools/convertBlockToImage.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");
const componentsRoot = path.join(
  repoRoot,
  "demo/src/ComponentsPage/blocks/composite",
);
const outputDir = path.join(componentsRoot, "assets/screenshots");

const targets = [
  {
    file: "ProductSpotlights.tsx",
    variableName: "productSpotlightBlocks",
    image: "headphones-spotlight.png",
    prefix: "product-spotlight",
  },
  {
    file: "EventPromos.tsx",
    variableName: "eventPromoBlocks",
    image: "event-workshop.png",
    prefix: "event-promo",
  },
  {
    file: "EditorialStories.tsx",
    variableName: "editorialStoryBlocks",
    image: "wellness-editorial.png",
    prefix: "editorial-story",
  },
  {
    file: "SeasonalSales.tsx",
    variableName: "seasonalSaleBlocks",
    image: "seasonal-sale.png",
    prefix: "seasonal-sale",
  },
  {
    file: "BrandStories.tsx",
    variableName: "brandStoryBlocks",
    image: "brand-story.png",
    prefix: "brand-story",
  },
  {
    file: "AppPromos.tsx",
    variableName: "appPromoBlocks",
    image: "app-promo.png",
    prefix: "app-promo",
  },
  {
    file: "LoyaltyRewards.tsx",
    variableName: "loyaltyRewardsBlocks",
    image: "loyalty-rewards.png",
    prefix: "loyalty-rewards",
  },
  {
    file: "ShippingUpdates.tsx",
    variableName: "shippingUpdateBlocks",
    image: "shipping-update.png",
    prefix: "shipping-update",
  },
  {
    file: "ComparisonBlocks.tsx",
    variableName: "comparisonBlocks",
    image: "product-comparison.png",
    prefix: "comparison-block",
  },
  {
    file: "LookbookGrids.tsx",
    variableName: "lookbookGridBlocks",
    image: "lookbook-grid.png",
    prefix: "lookbook-grid",
  },
  {
    file: "OrderReceipts.tsx",
    variableName: "orderReceiptBlocks",
    image: "lookbook-grid.png",
    prefix: "order-receipt",
  },
  {
    file: "SurveyRatings.tsx",
    variableName: "surveyRatingBlocks",
    image: "lookbook-grid.png",
    prefix: "survey-rating",
  },
];

function extractBlocks(source, variableName, imageSrc) {
  const declaration = `const ${variableName}`;
  const start = source.indexOf(declaration);
  if (start < 0) {
    throw new Error(`Cannot find ${variableName}`);
  }

  const equals = source.indexOf("=", start);
  if (equals < 0) {
    throw new Error(`Cannot find assignment for ${variableName}`);
  }

  const arrayStart = source.indexOf("[", equals);
  if (arrayStart < 0) {
    throw new Error(`Cannot find array for ${variableName}`);
  }

  let depth = 0;
  let inString = false;
  let quote = "";
  let escaped = false;
  let arrayEnd = -1;

  for (let i = arrayStart; i < source.length; i += 1) {
    const char = source[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        inString = false;
      }
      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      inString = true;
      quote = char;
      continue;
    }

    if (char === "[") {
      depth += 1;
    } else if (char === "]") {
      depth -= 1;
      if (depth === 0) {
        arrayEnd = i + 1;
        break;
      }
    }
  }

  if (arrayEnd < 0) {
    throw new Error(`Cannot find closing array for ${variableName}`);
  }

  const arrayExpression = source
    .slice(arrayStart, arrayEnd)
    .replace(/thumbnail:\s*[A-Za-z_$][\w$]*,/g, "thumbnail: imageSrc,")
    .replace(/\s+as\s+StandardSectionElement/g, "");

  const script = new vm.Script(`const imageSrc = ${JSON.stringify(imageSrc)};
    const blocks = ${arrayExpression};
    blocks;`);
  return script.runInNewContext({});
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

async function download(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status}`);
  }
  return Buffer.from(await response.arrayBuffer());
}

async function toDataUri(filePath) {
  const buffer = await readFile(filePath);
  return `data:image/png;base64,${buffer.toString("base64")}`;
}

await mkdir(outputDir, { recursive: true });

const selectedTargets = new Set(process.argv.slice(2));
const filteredTargets = selectedTargets.size
  ? targets.filter(
      (target) =>
        selectedTargets.has(target.file) ||
        selectedTargets.has(target.variableName) ||
        selectedTargets.has(target.prefix),
    )
  : targets;

const results = [];

for (const target of filteredTargets) {
  const sourcePath = path.join(componentsRoot, target.file);
  const source = await readFile(sourcePath, "utf8");
  const imageSrc = await toDataUri(path.join(componentsRoot, "assets", target.image));
  const blocks = extractBlocks(source, target.variableName, imageSrc);

  for (const [index, block] of blocks.entries()) {
    const blockDefinition = BlockManager.getBlockByType(block.payload.type);
    const element = blockDefinition?.create
      ? blockDefinition.create(block.payload)
      : block.payload;
    const outputName = `${target.prefix}-${index + 1}-${slugify(
      block.title,
    )}.png`;
    const outputPath = path.join(outputDir, outputName);

    process.stdout.write(`Exporting ${block.title}... `);
    const result = await convertBlockToImage({
      block: element,
      width: 600,
      height: 1200,
      format: "png",
      mode: "production",
      displayMode: "only-desktop",
    });

    if (!result.success || !result.imageUrl) {
      throw new Error(
        `Failed to export ${block.title}: ${result.error || "missing imageUrl"}`,
      );
    }

    const buffer = await download(result.imageUrl);
    await writeFile(outputPath, buffer);
    results.push({
      title: block.title,
      imageUrl: result.imageUrl,
      outputPath,
    });
    process.stdout.write(`${path.relative(repoRoot, outputPath)}\n`);
  }
}

console.log(JSON.stringify(results, null, 2));
