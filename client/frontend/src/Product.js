import React, {useState, useEffect} from 'react'
import { useStore } from './context/StorageContext'


export default function Product() {
    const {curr} = useStore();

  return (
    <div className='body-h'>
        {curr.productName}
    </div>
  )
}