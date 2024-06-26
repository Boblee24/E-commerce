import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
    </div>
  )
}

export default Navbar