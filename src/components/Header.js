import React from 'react'
import '../styles/Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='p-4  bg-gray-100 shadow-lg'>
      <div className="flex justify-between container-lg">
        <div className="logo text-orange-500 font-extrabold text-lg">
          Swiggy
      </div>
      <div className="">
          <ul className="flex gap-10">
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact Us</li></Link>
          <Link to="/cart"><li>Cart</li></Link>
          </ul>
      </div>
    </div>
    </div>
  )
}

export default Header