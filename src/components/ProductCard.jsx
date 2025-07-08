import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  // 🔸 puanı 0–5 arası, 1 ondalık
  const rating = (product.popularityScore / 20).toFixed(1);
  const full  = Math.floor(rating);          // tam yıldız sayısı
  const half  = rating - full >= 0.5;        // yarım yıldız var mı

  return (
    <div className="card">
      <img
        src={product.images?.[0] ?? "https://via.placeholder.com/200"}
        alt={product.name}
      />

      <h3>{product.name}</h3>
      <p className="price">{product.price}</p>

      {/* ⭐ puan + yıldız */}
      <p className="stars">
        {rating} / 5&nbsp;
        {Array.from({ length: 5 }, (_, i) => {
          if (i < full)            return <span key={i}>★</span>;     // dolu
          if (i === full && half)  return <span key={i}>☆</span>;     // yarım yerine boş bırak
          return <span key={i}>☆</span>;                              // boş
        })}
      </p>
    </div>
  );
}
