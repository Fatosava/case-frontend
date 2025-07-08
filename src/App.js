import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://renart-case-study-0ce0.onrender.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1>💎 Renart Ürün Listesi</h1>
      <div className="grid">
        {products.map((p, i) => <ProductCard key={i} product={p} />)}
      </div>
    </div>
  );
}
export default App;
