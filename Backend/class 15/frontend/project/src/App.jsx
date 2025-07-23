import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login, Signup } from './pages'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from './pages/dashboards/admin'
import VendorDashboard from './pages/vendor/dashboard'
import Restaurant from './pages/vendor/restaurant'
import VendorMenu from './pages/vendor/menu'
import VendorOrders from './pages/vendor/order'
import AllRestaurant from './pages/admin/AllRestaurant'
import OtpVerificationPage from './pages/auth/OtpVerificationPage'
// import Login from './pages/auth/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>

        <Route index element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="/otp-verify" element={<OtpVerificationPage />} />


        {/* ADMIN ROUTES */}
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/admin-all-restaurant' element={<AllRestaurant />} />
        {/* <Route path='/admin-all-orders' element={<AllOrders />} /> */}





        {/* //Vendor routes */}
        <Route path='/vendor-dashboard' element={<VendorDashboard />} />
        <Route path='/vendor-restaurant' element={<Restaurant />} />
        <Route path='/vendor-menu' element={<VendorMenu />} />
        <Route path='/vendor-orders' element={<VendorOrders />} />





      </Routes>
    </>
  )
}

export default App
