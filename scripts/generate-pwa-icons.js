const fs = require('fs');
const path = require('path');

// Create icons directory if it doesn't exist
const iconsDir = path.join(__dirname, '../public/icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Create screenshots directory if it doesn't exist
const screenshotsDir = path.join(__dirname, '../public/screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

// Icon sizes for PWA
const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];

// Create placeholder icon files (you should replace these with actual generated icons)
iconSizes.forEach(size => {
  const iconPath = path.join(iconsDir, `icon-${size}x${size}.png`);
  
  // Create a simple SVG-based icon content
  const svgContent = `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e3a8a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" fill="url(#grad)" rx="${size * 0.2}"/>
  <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-family="Arial, sans-serif" font-size="${size * 0.3}" font-weight="bold">BSC</text>
  <text x="50%" y="70%" text-anchor="middle" dy=".3em" fill="white" font-family="Arial, sans-serif" font-size="${size * 0.15}">Trading</text>
</svg>`;

  // For now, we'll create a simple text file indicating what should be here
  // In a real implementation, you'd use a library like sharp or jimp to generate actual PNG files
  fs.writeFileSync(iconPath.replace('.png', '.svg'), svgContent);
  console.log(`Created placeholder icon: icon-${size}x${size}.svg`);
});

// Create placeholder screenshot files
const screenshots = [
  { name: 'desktop-1.png', width: 1280, height: 720 },
  { name: 'mobile-1.png', width: 390, height: 844 }
];

screenshots.forEach(screenshot => {
  const screenshotPath = path.join(screenshotsDir, screenshot.name);
  const svgContent = `
<svg width="${screenshot.width}" height="${screenshot.height}" viewBox="0 0 ${screenshot.width} ${screenshot.height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${screenshot.width}" height="${screenshot.height}" fill="#f8fafc"/>
  <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#64748b" font-family="Arial, sans-serif" font-size="24">Screenshot: ${screenshot.name}</text>
  <text x="50%" y="60%" text-anchor="middle" dy=".3em" fill="#64748b" font-family="Arial, sans-serif" font-size="16">${screenshot.width}x${screenshot.height}</text>
</svg>`;
  
  fs.writeFileSync(screenshotPath.replace('.png', '.svg'), svgContent);
  console.log(`Created placeholder screenshot: ${screenshot.name.replace('.png', '.svg')}`);
});

console.log('\nPWA icon generation complete!');
console.log('Note: These are placeholder SVG files. For production, you should:');
console.log('1. Replace the SVG files with actual PNG icons');
console.log('2. Use a tool like https://realfavicongenerator.net/ or similar');
console.log('3. Ensure icons are properly sized and optimized'); 