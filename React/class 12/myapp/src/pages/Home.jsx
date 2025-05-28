import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const [products, setProduct] = useState([])


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await axios.get("https://fakestoreapi.com/products/")
        // console.log(response.data)
        setProduct(response.data)
    }

    return (
        <div>

            {
                products.map((product) => {
                    return (
                        <div>
                            <Link to={`/product/${product.id}`} >
                                <h1> NAME: {product.title} </h1>
                            </Link>
                            <h1> PRICE {product.price} </h1>
                            <hr />
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Home
