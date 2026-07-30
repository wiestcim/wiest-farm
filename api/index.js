module.exports = (req, res) => {
  const html = `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <title>Bot Aktif</title>
  <style>
    body {
      background: #111;
      color: #eee;
      font-family: system-ui, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      flex-direction: column;
    }
    .status { color: #4ade80; font-weight: bold; }
  </style>
</head>
<body>
  <h1>🤖 Bot Çalışıyor</h1>
  <p class="status">Durum: Aktif</p>
</body>
</html>`;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.status(200).send(html);
};
