import React from 'react'
import { useSearchParams } from 'react-router-dom'

const List = () => {
    const [URLSearchParam] = useSearchParams()
    // console.log("searchParams", searchParams[0].get("name"))
    // console.log("searchParams", searchParams[0].get("name"))
    console.log("URLSearchParam", URLSearchParam.get("name"))
    console.log("URLSearchParam", URLSearchParam.get("size"))
    // console.log("URLSearchParam", URLSearchParam.getAll("name", "size"))


    return (
        <div>
            <h1>LIST</h1>
        </div>
    )
}

export default List
