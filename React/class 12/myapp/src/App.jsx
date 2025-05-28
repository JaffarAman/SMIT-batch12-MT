import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import styles from "./app.module.css"
import UserProfile from './pages/UserProfile'
import List from './pages/List'
import SingleProduct from './pages/SingleProduct'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Link to={"/"} >Home</Link>
        <Link to="/about" >About</Link>
        <Link to={"/contact"} >Contact</Link> */}
        <NavLink to={"/"}
          className={({ isActive }) =>
            isActive ? styles.activeNavlink : styles.navlink}
        >
          Home</NavLink>


        <NavLink to="/about"
          className={({ isActive }) =>
            isActive ? styles.activeNavlink : styles.navlink} >
          About</NavLink>



        <NavLink to="/contact"
          className={({ isActive }) =>
            isActive ? styles.activeNavlink : styles.navlink

          } >contact</NavLink>

      </div>
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} /> */}

        {/* <Route path='/userprofile/jaffar' element={<UserProfile />} /> */}

        {/* Dynamic Routes */}
        {/* <Route path={`/userprofile/:name`} element={<UserProfile />} />

        <Route path="/listing"  element={<List />} /> */}




        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<SingleProduct />} />



      </Routes>

    </>
  )
}

export default App
