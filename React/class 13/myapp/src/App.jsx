import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import { app } from './firebase'
import Signup from './pages/auth/Signup'

function App() {
  const [count, setCount] = useState(0)
  console.log("firebase app" , app)

  return (
    <>
      {/* <Routes>
        <Route index element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} /> */}

        {/* nested routes */}

        {/* <Route path='/product' element={<ProductPage />} />
        <Route path='/product/:id' element={<ProductDetailPage />} />
        <Route path='/product/sale' element={<ProductSalePage />} />

        <Route path="/product/" >
          <Route index element={<ProductPage />} />
          <Route path=':id' element={<ProductDetailPage />} />
          <Route path='sale' element={<ProductSalePage />} />
        </Route>




        <Route path='*' element={<NotFound />} />
      </Routes> */}


          <Routes>
            <Route index element={<Signup />} />
          </Routes>


    </>
  )
}


const ProductPage = () => {
  return <h1>ProductPage</h1>
}


const ProductDetailPage = () => {
  return <h1>ProductDetailPage</h1>
}

const ProductSalePage = () => {
  return <h1>ProductSalePage</h1>
}


export default App
