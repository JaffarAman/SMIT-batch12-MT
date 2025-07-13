import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../../../utils'
import Cookies from 'js-cookie'

const AdminDashboard = () => {
    useEffect(() => {
        (async () => {
            const payload = {}
            const response = await axios.post(`${BASE_URL}/create`, payload , {
                headers :{
                    Authorization : `Bearer ${Cookies.get("token")}`
                }
            } )
            console.log("response" , response)
        })()
    }, [])
    return (
        <div>
            <h1>Admin Dashboard</h1>
        </div>
    )
}

export default AdminDashboard
