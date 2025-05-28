import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {

    const params = useParams()


    useEffect(() => {
        fetchSingleProduct()
    }, [])
    const fetchSingleProduct = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`)

        console.log("response", response)

    }

    return (
        <div>
            <h1>SingleProduct :{params.id} </h1>
        </div>
    )
}

export default SingleProduct
