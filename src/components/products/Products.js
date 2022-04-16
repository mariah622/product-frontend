import React from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import { useState, useEffect } from 'react'

export default function Products(){
    const [products, setProducts] = useState([])

    useEffect(()=> {
        fetch('http://localhost:3000/products')
        .then(r => r.json())
        .then(data => setProducts(data)) 

    }, [])

    // console.log(products)
    return <div>
        <h1>Products</h1>
            <ProductForm/>
            <ProductList products={products}/>
    </div>
}