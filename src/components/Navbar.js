import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            RAIA HOTEL
            <i className='fa-solid fa-hotel'></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/rooms'
                className='nav-links'
                onClick={closeMobileMenu}>Rooms</Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}>Contact Us</Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links-mobile'
                onClick={closeMobileMenu}>BOOK NOW</Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Book Now</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
