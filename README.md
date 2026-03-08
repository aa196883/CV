# CV (HTML + PDF)

This repository contains my C in **static HTML format**, available in **French and English**.

The CV is designed as a simple, printable web page and can also be exported to **PDF**.

## Structure

- `index.en.html` — English version of the CV  
- `index.fr.html` — French version of the CV  
- `styles.css` — shared styling  
- `print.css` — print layout for PDF generation  
- `generate-pdf.js` — script to generate PDF versions

## PDF Generation

PDF files can be generated from the HTML versions using the provided script.

Example:

```bash
node generate-pdf.js
