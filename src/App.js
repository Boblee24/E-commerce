import React from 'react'
import Contact from './Components/Contact' 
import LoginForm from './Components/LoginForm' 
import Home from './Components/Home'
import Privacy from './Components/Privacy'
import SignUp from './Components/SignUp'
import {Route, Routes} from "react-router-dom"
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='login' element={<LoginForm/>} />
        <Route path='privacy' element={<Privacy/>} />
        <Route path='signup' element={<SignUp/>} />
        <Route path='contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App