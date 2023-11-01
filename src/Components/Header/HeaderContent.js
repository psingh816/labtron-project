import React from 'react';
import logo from './logo.png';
import './HeaderContent.css';
import { AiOutlineSearch } from 'react-icons/ai';
import Navbar from './Navbar';

function HeaderContent() {
  return (
    <>
      <Navbar />
      <div className='main-header'>
        <div>
          <img src={logo} alt='main logo' style={{ height: '50px' }} />
        </div>
        <div className='main-links'>
          <div>Home</div>
          <div>Products</div>
          <div>Categories</div>
          <div>Catelogs</div>
          <div>About Us</div>
          <div>Contact Us</div>
        </div>
        <div className='search'>
          <AiOutlineSearch style={{ color: 'green', fontSize: 'x-large' }} />
          <input placeholder='Enquiry' />
        </div>
      </div>
    </>
  );
}

export default HeaderContent;
