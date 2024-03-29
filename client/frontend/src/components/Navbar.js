import React from "react";
import { useAddress, useMetamask } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";
// import { useStateContext } from "../context";


const Navbar = () => {
  const connect = useMetamask();
  const address = useAddress();

  return (
    <div>
      <div style={{display : "flex", flexDirection:"row-reverse", padding : "20px", justifyContent:"space-between"}}>
        {/* <button
          onClick={connect}
          style={{
            height:"50px",
            width:"180px",
            borderRadius: "8px", // Rounded corners
            fontFamily: "Clash Grotesk", // Change to your font-family
            background:
              "linear-gradient(90deg, #FF3BFF 0%, #D94FD5 16.32%, #5C24FF 99.13%)", // Gradient background
            color: "#FFFFFF", // Text color
            padding: "10px 20px", // Padding for the button
            border: "none", // Remove border
            cursor: "pointer",
            fontSize:"18px",
            fontWeight: '500' // Add a pointer cursor
          }}
        >
          Connect Wallet
        </button> */}
        <ConnectWallet/>
        <h1>FoodChain</h1>
      </div>
    </div>
  );
};

export default Navbar;
