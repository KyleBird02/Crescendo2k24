import React, { useState } from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function Test2() {
  const { contract } = useContract("0x853Ef1936A4b8B436554b0452CB805030E9A0Dbb");
  const { mutateAsync: addProduct, isLoading } = useContractWrite(contract, "addProduct");

  const [companyName, setCompanyName] = useState("");
  const [productName, setProductName] = useState("");
  const [substanceNames, setSubstanceNames] = useState("");
  const [substanceMeasurements, setSubstanceMeasurements] = useState("");
  const [date, setDate] = useState("");

  const call = async(companyName, productName, substanceNames, substanceMeasurements, date) => {
    try{
      const data = await addProduct({
        args: [companyName, productName, substanceNames, substanceMeasurements, "tygytf"],
      });
    }catch (err) {
      console.error("contract call failure", err);
  }
  }

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await call(companyName, productName, substanceNames, substanceMeasurements, date)
      console.info("Contract call success");
      // Optionally, you can reset input fields or perform other actions upon success
    } catch (err) {
      console.error("Contract call failure", err);
      // Optionally, handle errors or provide user feedback
    }
  };
  
  return (
    <div>
      <h1>Add Product</h1>

      {/* Input fields for adding a product */}
      <label>
        Company Name:
        <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
      </label>
      <br />
      <label>
        Product Name:
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
      </label>
      <br />
      <label>
        Substance Names:
        <input type="text" value={substanceNames} onChange={(e) => setSubstanceNames(e.target.value.split(","))} />
      </label>
      <br />
      <label>
        Substance Measurements:
        <input type="text" value={substanceMeasurements} onChange={(e) => setSubstanceMeasurements(e.target.value.split(","))} />
      </label>
      <br />
      <label>
        Date:
      </label>
      {Date.now()}
      <br />

      {/* Button to trigger contract write */}
      <button onClick={handleAddProduct} disabled={isLoading}>
        {isLoading ? "Adding Product..." : "Add Product"}
      </button>
    </div>
  );
}
