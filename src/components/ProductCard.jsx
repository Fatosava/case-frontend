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
        src={product.images?.[0] ?? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.guneskuyumculuk.com.tr%2Furun%2F22-ayar-basak-model-altin-yuzuk%3Fsrsltid%3DAfmBOoqHcCuc7W0_PggjF1pWg8xYF4RFccErp85L4dB5NUv3Gg1YjIfY&psig=AOvVaw2RVJwl5yUYNR24KbVS8bSH&ust=1752027604969000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICpm8uZrI4DFQAAAAAdAAAAABAE"}
        alt={product.name}
      />

      <h3>{product.name}</h3>
      <p className="price">{product.price}</p>

      {/* ⭐ puan + yıldız */}
      <p className="stars">
       const rating = (product.popularityScore / 20).toFixed(1);
const fullStars = Math.round(rating);  // en yakın tam yıldıza yuvarla

return (
  /* …img, isim, fiyat… */
  <p className="stars">
    {rating} / 5&nbsp;
    {"★".repeat(fullStars)}
    {"☆".repeat(5 - fullStars)}
  </p>
);
      </p>
    </div>
  );
}
