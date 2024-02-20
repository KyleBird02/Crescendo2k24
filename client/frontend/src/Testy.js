import React, { useState } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";

export default function Test2() {
  const { contract } = useContract("0x853Ef1936A4b8B436554b0452CB805030E9A0Dbb");
  const { data, isLoading } = useContractRead(contract, "getAllProducts", []);

  return (
    <div>
      <h1>Product List</h1>

      {/* Display loading message if data is still being fetched */}
      {isLoading && <p>Loading...</p>}

      {/* Display product list if data is available */}
      {!isLoading && data && (
        <ul>
          {data.map((product, index) => {
            console.log(product,index)
            return(
            <li key={index}>{product}</li>
          )})}
        </ul>
      )}
    </div>
  );
}
