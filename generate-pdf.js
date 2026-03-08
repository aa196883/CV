const path = require("path");
const { chromium } = require("playwright");

async function exportPdf(htmlFile, outFile, scale = 1.0) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const filePath = path.join(process.cwd(), htmlFile);
  const url = "file://" + filePath;

  await page.goto(url, { waitUntil: "networkidle" });
  await page.evaluateHandle("document.fonts.ready");

  await page.pdf({
    path: outFile,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    scale,
    margin: {
      top: "8mm",
      right: "8mm",
      bottom: "8mm",
      left: "8mm"
    }
  });

  await browser.close();
  console.log(`✅ Generated ${outFile}`);
}

(async () => {
  await exportPdf("index.en.html", "Adel_Aly_CV_EN.pdf", 0.92);
  await exportPdf("index.fr.html", "Adel_Aly_CV_FR.pdf", 0.92);
})();