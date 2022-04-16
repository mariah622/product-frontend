import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList({products}){
    return <ul>
        {products.map(p => <ProductCard {...p} key={p.id}/>)}

    </ul>
} 