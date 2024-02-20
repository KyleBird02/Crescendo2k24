import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import "./styles/globals.css";
import FSO from "./components/FSO/FSO";
import Test3 from "./components/Test3";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import ProductRoute from "./ProductRoute";
import Product from "./Product";
import {HashRouter as Router,Routes,Route} from 'react-router-dom';
import { StorageProvider } from "./context/StorageContext";
import ProtectedRoute from "./ProtectedRoute";
import Test2 from "./components/Test2";


const fakeItems = [
  {
    companyName: "Brittania",
    productName: "Butter Cookies",
    substances: ["Butter", "Sugars", "Sugars", "Sugars", "Sugars", "Sugars", "Sugars", "Sugars", "Sugars", "Sugars", "Sugars"],
    values: ["50", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"],
    date: "2023-05-12"
  },
  {
    companyName: "Brittania",
    productName: "Hazelnut Cookies",
    substances: ["Butter", "Sugars"],
    values: ["50", "25"],
    date: "2023-05-12"
  },
  {
    companyName: "Brittania",
    productName: "Pista Cookies",
    substances: ["Butter", "Sugars"],
    values: ["50", "25"],
    date: "2023-05-12"
  },
  {
    companyName: "Brittania",
    productName: "Cashew Cookies",
    substances: ["Butter", "Sugars"],
    values: ["50", "25"],
    date: "2023-05-12"
  },
  {
    companyName: "Brittania",
    productName: "Chocochip Cookies",
    substances: ["Butter", "Sugars"],
    values: ["50", "25"],
    date: "2023-05-12"
  },
  {
    companyName: "Kurkure",
    productName: "Chilli Chatka",
    substances: ["Butter", "Sugars"],
    values: ["50", "25"],
    date: "2023-05-12"
  },
  {
    companyName: "Kurkure",
    productName: "Hyderabadi Hungama",
    substances: ["Butter", "Sugars"],
    values: ["50", "25"],
    date: "2023-05-12"
  }
  
  
  
  // Add more objects as needed
];

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ethereum";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={Sepolia}
      clientId={"302d02688f009be7e80db778a9a37324"}
    >
      <StorageProvider>
      <Navbar/>
      <Router>
            <Routes>
                  <Route exact path="/fso" element={<ProtectedRoute/>}>
                  <Route exact path = '/fso' element={<Test2/>}/>
                  </Route>
                  <Route exact path = '/' element={<Cards items={fakeItems}/>}/>
                  <Route exact path = '/product' element={<ProductRoute/>}>
                    <Route exact path='/product' element={<Product/>}/>
                  </Route>
            </Routes>
    </Router>
      </StorageProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
