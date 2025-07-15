const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/scrape', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: 'Missing ?url=' });

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    console.log(`[INFO] Navigating to ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

    const html = await page.content();
    await browser.close();

    res.send({ html });
  } catch (err) {
    console.error('[ERROR]', err.message);
    res.status(500).json({ error: 'Scraping failed', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
