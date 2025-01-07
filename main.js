// main.js
import { gotScraping } from 'got-scraping';
import * as cheerio from 'cheerio';

const storeUrl = 'https://warehouse-theme-metal.myshopify.com/collections/sales';

// Download HTML with Got Scraping
const response = await gotScraping(storeUrl);
const html = response.body;

// Parse HTML with Cheerio
const $ = cheerio.load(html);

// Find all products on the page
const products = $('.product-item');

// Loop through all the products
// and print their text to terminal
for (const product of products) {
    const productElement = $(product);
    const productText = productElement.text();

    console.log(productText);
}