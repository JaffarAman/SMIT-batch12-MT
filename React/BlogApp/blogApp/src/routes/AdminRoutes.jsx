import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRoutes = () => {
    const role = JSON.parse(localStorage.getItem("userObj"))?.type
    return (
        localStorage.getItem("user") ?
            role === "admin" ?
                <Outlet /> :
                <Navigate to="blogs" />
            : <Navigate to="/" />
    )
}

export default AdminRoutes
