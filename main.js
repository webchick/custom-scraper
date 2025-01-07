// main.js
import { gotScraping } from 'got-scraping';

const storeUrl = 'https://warehouse-theme-metal.myshopify.com/collections/sales';

const response = await gotScraping(storeUrl);
const html = response.body;
console.log(html);