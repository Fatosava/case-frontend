import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img
        src={product.images?.[0] ?? "https://via.placeholder.com/200"}
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <p className="price">{product.price}</p>
      <p className="stars">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i}>{i < Math.round(product.popularityScore / 20) ? "★" : "☆"}</span>
        ))}
      </p>
    </div>
  );
}
