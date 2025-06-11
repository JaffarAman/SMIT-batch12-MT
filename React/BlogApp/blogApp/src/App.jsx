import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
import { Bounce, ToastContainer } from 'react-toastify'
import BlogPage from './pages/BlogPage'
import MyBlogPage from './pages/MyBlogPage'
import CreateBlogPage from './pages/CreateBlogPage'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/myblogs" element={<MyBlogPage />} />
        <Route path="/createblogs" element={<CreateBlogPage />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  )
}

export default App
