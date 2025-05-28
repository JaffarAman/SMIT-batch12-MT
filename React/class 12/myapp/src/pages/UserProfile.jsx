import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {

    const params = useParams()
    console.log("params", params)
    return (
        <div>
            <h1>HELLO  {params.name}  </h1>
        </div>
    )
}

export default UserProfile
