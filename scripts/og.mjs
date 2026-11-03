import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#080A0F"/>
  <path d="M90 430C280 430 360 250 560 250" fill="none" stroke="#8FCBE8" stroke-width="3" stroke-linecap="round"/>
  <path d="M1110 430C920 430 840 250 640 250" fill="none" stroke="#E4B583" stroke-width="3" stroke-linecap="round"/>
  <circle cx="600" cy="250" r="7" fill="#E7E2D6"/>
  <text x="80" y="150" fill="#A39E93" font-family="Georgia, serif" font-size="28">The Terminal State</text>
  <text x="80" y="250" fill="#E7E2D6" font-family="Georgia, serif" font-size="72">Two possible futures.</text>
  <text x="80" y="340" fill="#E7E2D6" font-family="Georgia, serif" font-size="72">One destination.</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();
await writeFile(new URL('../public/og.png', import.meta.url), png);
