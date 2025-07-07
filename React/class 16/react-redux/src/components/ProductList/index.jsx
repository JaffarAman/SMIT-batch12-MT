import React from 'react'
import { useSelector } from 'react-redux'

const ProductList = () => {
    const {products} =  useSelector((store)=>store.product)
    console.log("products" , products)

    // data get store
    return (
        <div>
                {products.map(product=><h1>{product.title}</h1>)}
        </div>
    )
}

export default ProductList
