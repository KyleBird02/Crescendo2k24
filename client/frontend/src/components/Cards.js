import React from "react";
import { useStore } from "../context/StorageContext";
import { useNavigate } from "react-router-dom";
import kurkureGreen from "../assets/food/kurkure/dgreen-kurkure.jpg";
import kurkureRed from "../assets/food/kurkure/hyder-kurkure.jpg";
import chocochip from "../assets/food/good-day/purple-gd.jpg";
import cashew from "../assets/food/good-day/orange-gd.jpg";
import butter from "../assets/food/good-day/blue-gd.jpg";
import pista from "../assets/food/good-day/green-webp.jpg";
import hazelnut from "../assets/food/good-day/brown-gd.jpeg";

export default function Cards({ items }) {
  const { setCurr } = useStore();
  const navigate = useNavigate();

  function imageSetter(productName) {
    if (productName == "Chilli Chatka") {
      return kurkureGreen;
    } else if (productName == "Hyderabadi Hungama") {
      return kurkureRed;
    } else if (productName == "Chocochip Cookies") {
      return chocochip;
    } else if (productName == "Cashew Cookies") {
      return cashew;
    } else if (productName == "Pista Cookies") {
      return pista;
    } else if (productName == "Hazelnut Cookies") {
      return hazelnut;
    } else if (productName == "Butter Cookies") {
      return butter;
    }
  }

  return (
    <div className="product-page">
      <div className="header">
        <h1>Item Select</h1>
        <div class="search-container">
          <input type="text" class="search-input" placeholder="Search..." />
        </div>
      </div>
      <div className="card-container">
        {items.map((item, index) => (
          <div
            key={index}
            className="card transition-all"
            onClick={() => {
              setCurr(item);
              navigate("/product");
            }}
          >
            {/* Render the content of each card */}
            <div className="card-overlay">{item.productName}</div>
            <img
              className="prod-img"
              src={imageSetter(item.productName)}
              alt={`Image ${index}`}
            />
            {/* Add more content here if needed */}
          </div>
        ))}
      </div>
    </div>
  );
}
