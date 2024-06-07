// src/shopify.js
import axios from 'axios';
import { SHOPIFY_STORE_DOMAIN, SHOPIFY_API_KEY, SHOPIFY_API_PASSWORD } from './config';

const shopifyClient = axios.create({
  baseURL: `https://${SHOPIFY_API_KEY}:${SHOPIFY_API_PASSWORD}@${SHOPIFY_STORE_DOMAIN}/admin/api/2023-04`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = async () => {
  try {
    const response = await shopifyClient.get('/products.json');
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
