import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";            // temel CSS
import "swiper/css/navigation"; // ok-tuşları
import "swiper/css/pagination"; // sayfa numaraları

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
       <div className="carousel">
  <Swiper
    modules={[Navigation, Pagination]}
    navigation          // sağ-sol oklar
    pagination={{ clickable: true }}
    spaceBetween={24}
    slidesPerView={1}
    breakpoints={{
      640: { slidesPerView: 2 },
      900: { slidesPerView: 3 },
      1200: { slidesPerView: 4 }
    }}
  >
    {products.map((p, i) => (
      <SwiperSlide key={i}>
        <ProductCard product={p} />
      </SwiperSlide>
    ))}
  </Swiper>
</div>
      </div>
    </div>
  );
}
export default App;
