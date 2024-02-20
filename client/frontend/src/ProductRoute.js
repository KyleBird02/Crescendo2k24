import React from 'react';
import { useStore } from './/context/StorageContext';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProductRoute() {
    const {curr} = useStore()
    return curr?.productName ? <Outlet /> : <Navigate to="/" />;
}