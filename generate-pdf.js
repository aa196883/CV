const path = require("path");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const filePath = path.join(process.cwd(), "index.html");
  const fileUrl = "file://" + filePath;

  await page.goto(fileUrl, { waitUntil: "networkidle" });

  // Optional: ensure fonts/layout are fully ready
  await page.evaluateHandle("document.fonts.ready");

  await page.pdf({
    path: "Adel_Aly_CV.pdf",
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true
  });

  await browser.close();
  console.log("✅ PDF generated: Adel_Aly_CV.pdf");
})();
