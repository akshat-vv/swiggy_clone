import React from 'react'
import '../styles/Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='p-4 flex justify-between bg-gray-100 shadow-lg'>
      <div className="logo">
          Swiggy
      </div>
      <div className="">
          <ul className="flex gap-10">
            <Link to="/"><li>Home</li></Link>
            <Link to="about"><li>About</li></Link>
            <Link to="contact"><li>Contact Us</li></Link>
            <Link to="cart"><li>Cart</li></Link>
          </ul>
      </div>
    </div>
  )
}

export default Header