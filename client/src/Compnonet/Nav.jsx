import React from 'react'
import "../styles/nav.css"
const Nav = () => {
  return (
   <>
   <nav className='mainnav'>
    <div className="logo">
        <h2>Experiment</h2>
    </div>
    <div className='navgation'>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Post</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">About</a></li>
        </ul>
    </div>
    <div className="user">
        <h3>Hi.. {}</h3>
        <a href="">Login</a>
    </div>
   </nav>
   </>
  )
}

export default Nav
