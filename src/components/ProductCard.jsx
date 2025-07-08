import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const rating = (product.popularityScore / 20).toFixed(1); // 0–5, 1 ondalık
  const full   = Math.round(rating);                        // tam yıldız

  return (
    <div className="card">
      <img
        src={product.images?.[0] ?? "https://via.placeholder.com/200"}
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <p className="price">{product.price}</p>

      {/* puan + yıldız */}
      <p className="stars">
        {rating} / 5&nbsp;
        {"★".repeat(full)}
        {"☆".repeat(5 - full)}
      </p>
    </div>
  );
}
