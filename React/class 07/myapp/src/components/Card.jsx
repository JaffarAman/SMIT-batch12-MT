import React, { useState } from 'react'

const Card = (props) => {
    const { state } = props
    console.log("CARD CMP", state)
    const [price, setPrice] = useState(100)

    const updatePrice = () => {
        setPrice((prev) => 200)
        console.log(price, "price")
    }
    // console.log(price, "price")

    return (
        <div>
            <h1>CARD CMP: {state}</h1>
            <h1>PRICE: ${price}</h1>
            <button onClick={updatePrice} >UPDATE PRICE</button>
        </div>
    )
}

export default Card
