import React, { useState, useEffect } from "react";
import { useStore } from "./context/StorageContext";
import kurkureGreen from "./assets/food/kurkure/dgreen-kurkure.jpg";
import kurkureRed from "./assets/food/kurkure/hyder-kurkure.jpg";
import chocochip from "./assets/food/good-day/purple-gd.jpg";
import cashew from "./assets/food/good-day/orange-gd.jpg";
import butter from "./assets/food/good-day/blue-gd.jpg";
import pista from "./assets/food/good-day/green-webp.jpg";
import hazelnut from "./assets/food/good-day/brown-gd.jpeg";

export default function Product() {
  const { curr } = useStore();
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
    <div className="product-highlight">
      <div className="prod-high">
        <div className="image-banner">
          <img
            className="prod-img-highlight"
            src={imageSetter(curr.productName)}
            alt={`Image ${curr.productName}`}
          />
        </div>
        <div className="right-info">
          <div className="right-row">
            <p className="right-header">COMPANY</p>
            <p className="right-subheader">{curr.companyName}</p>
          </div>
          <div className="right-row">
            <p className="right-header">PRODUCT</p>
            <p className="right-subheader">{curr.productName}</p>
          </div>
          <div className="right-row">
            <p className="right-header">COMPOSITION</p>
            <div className="chip-container">
              {curr.substances.map((substance, index) => (
                <div className="chip" key={index}>
                  <h2 className="text-sm font-semibold text">{substance}</h2>
                  <h1 className="text-xl font-semibold text-gray-200">
                    {curr.values[index]}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div className="body-h"></div>
        </div>
      </div>
    </div>
  );
}
