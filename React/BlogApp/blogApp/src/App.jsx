import { useState } from 'react'
import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
import { Bounce, ToastContainer } from 'react-toastify'
import BlogPage from './pages/BlogPage'
import MyBlogPage from './pages/MyBlogPage'
import CreateBlogPage from './pages/CreateBlogPage'
import PrivateRoute from './routes/PrivateRoute'
import AuthRoute from './routes/AuthRoute'
import AdminDashboard from './pages/admin/adminDashboard'
import AdminRoutes from './routes/AdminRoutes'
import AllUser from './pages/admin/AllUser'
import AllBlog from './pages/admin/AllBlog'

function App() {

  return (
    <>
      <Routes>


        <Route element={<AuthRoute />} >
          <Route index element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>



        <Route element={<PrivateRoute />} >
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/myblogs" element={<MyBlogPage />} />
          <Route path="/createblogs" element={<CreateBlogPage />} />
        </Route>


        <Route element={<AdminRoutes />} >
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AllUser />} />
          <Route path="/admin/blogs" element={<AllBlog />} />
        </Route>




        {/* Outlet */}

        {/* <Route element={<ParentPage />} >
          <Route path="/child1" element={<Child1 />} />
          <Route path="/child2" element={<Child2 />} />
          */}
        {/* <Route path="/child2" />
          <Route path="/child3" /> */}
        {/* 
        </Route> */}



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


const ParentPage = () => {


  return (
    <>
      {/* <h1>ParentPage</h1> */}
      <Outlet />

    </>
  )
}

const Child1 = () => {

  return (
    <h1>Child1</h1>
  )
}


const Child2 = () => {

  return (
    <h1>Child2</h1>
  )
}




export default App
