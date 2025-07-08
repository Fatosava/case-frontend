import React, { useEffect, useState } from "react";
import axios from "axios";
console.log(products)

function App() {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    axios
      .get("https://renart-case-study-0ce0.onrender.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Veri çekilemedi 😢", err));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>💎 Renart Ürün Listesi 💎</h1>
      <ul>
        {products.map((p, index) => (
          <li key={index}>
            <strong>{p.name}</strong> – {p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
// Bu kod renart ürünlerini listeliyor
// Uygulama ürün verilerini bir API den çekerek ekranda gösteriyor