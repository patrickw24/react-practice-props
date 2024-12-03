import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductCard } from "./Components/ProductCard";
import "./App.css";

function App() {
  const products = [
    { name: "Laptop", price: "$1200", stock: "In Stock" },
    { name: "Smartphone", price: "$800", stock: "Out of Stock" },
    { name: "Headphones", price: "$150", stock: "In Stock" },
    { name: "Playstation 5", price: "$500", stock: "In Stock" },
    { name: "Xbox", price: "$450", stock: "In Stock" },
    { name: "Keyboard", price: "$300", stock: "Out of Stock" },
    { name: "Wallet", price: "$30", stock: "In Stock" },
    { name: "Watch", price: "$100", stock: "Out of Stock" },
    { name: "Hat", price: "$20", stock: "Out of Stock" },
    { name: "Shoes", price: "$275", stock: "Out of Stock" },
    { name: "TV", price: "$1500", stock: "In Stock" },
    { name: "Lamp", price: "$40", stock: "In Stock" },
    { name: "Portait", price: "$80", stock: "In Stock" },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductCard products={products} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
