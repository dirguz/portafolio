import React from 'react'
import './Navbar.css';

function Navbar({isScrolling}) {
  //funcion para hacer click en la navbar y nos lleve al top
  let toTheTop =()=>{
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  }
  return (
    <nav className={`navbar ${isScrolling >20 ? 'scrolling':null}`}>
        <div className='navbar-logo' onClick={toTheTop}>
            <div>Diego Guzman</div>
            <div>Fullstack developer | Javascript | React | NodeJS |</div>
        </div>
    </nav>
  )
}

export default Navbar