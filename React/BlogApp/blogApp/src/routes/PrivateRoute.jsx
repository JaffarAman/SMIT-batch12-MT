import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {

  const role = JSON.parse(localStorage.getItem("userObj"))?.type
  return (
    // localStorage.getItem("user") && role == "user" ?
    //   <Outlet /> : <Navigate to={"/"} />
    localStorage.getItem("user") ?
      role === "user" ?
        <Outlet />
        : <Navigate to="/admin/dashboard" /> :
        <Navigate to="/" />


  )
}

export default PrivateRoute
