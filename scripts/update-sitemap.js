#!/usr/bin/env node

/**
 * Script to update sitemap.xml with current date
 * Usage: node scripts/update-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '../public/sitemap.xml');

function updateSitemap() {
  try {
    // Read the current sitemap
    let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    
    // Get current date in YYYY-MM-DD format
    const currentDate = new Date().toISOString().split('T')[0];
    
    // Replace all lastmod dates with current date
    const updatedContent = sitemapContent.replace(
      /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g,
      `<lastmod>${currentDate}</lastmod>`
    );
    
    // Write the updated content back
    fs.writeFileSync(sitemapPath, updatedContent);
    
    console.log(`✅ Sitemap updated with current date: ${currentDate}`);
    console.log(`📁 Updated file: ${sitemapPath}`);
    
  } catch (error) {
    console.error('❌ Error updating sitemap:', error.message);
    process.exit(1);
  }
}

// Run the update
updateSitemap(); 