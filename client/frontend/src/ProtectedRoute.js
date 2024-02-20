import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useStore } from './/context/StorageContext';
import { useContract, useContractRead } from "@thirdweb-dev/react";


export default function PrivateRoute() {
    const {address} = useStore()
    const { contract } = useContract("0xb5e7BbeAcA7154F8E3AaB641eC4DdD1Bde9Ba5DF");
    const { data, isLoading } = useContractRead(contract, "getRole", [address])
    return data ? <Outlet /> : <Navigate to="/" />;
}