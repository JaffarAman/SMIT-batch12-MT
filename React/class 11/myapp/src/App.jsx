import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, NavLink, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <a href="/">HOME</a>
      <a href="/about">ABOUT</a>
      <a href="/contact">Contact</a> */}
      <br />
      <br />
      <br />
      <Link to={"/"} >Home</Link>
      <Link to={"/about"} >About</Link>
      <Link to={"/contact"} >contact</Link>
      {/* <NavLink></NavLink> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>


    </>
  )
}



const HomePage = () => {
  return (
    <h1>HOME PAGE</h1>
  )
}

const AboutPage = () => {
  return (
    <h1>About PAGE</h1>
  )
}


const ContactPage = () => {
  return (
    <h1>Contact PAGE</h1>
  )
}

export default App
