// src/App.js
import React, { useEffect, useState } from 'react';
import { getProducts } from './shopify';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1>Shopify Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.body_html}</p>
            <img src={product.image.src} alt={product.title} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
