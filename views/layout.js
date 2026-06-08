// Shared HTML layout. Wraps page content with PicoCSS, custom styles,
// and a <main class="container"> wrapper.

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const layout = (title, content) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <main class="container">
${content}
  </main>
</body>
</html>`;

module.exports = { layout, escapeHtml };
