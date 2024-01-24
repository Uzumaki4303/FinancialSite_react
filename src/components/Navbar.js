import React from 'react';
import '../css/Navbar.css';

export default function Navbar() {
  return (
    // <div>Navbar</div>
    <>
        <div className='Navbar'>
            <h2 className='brand-name'>BrandName</h2>
            <div className='nav-container'>
                {/* <ul className='nav-ul'> */}
                    <li className='nav-li'><a href="#" className='nav-a'>Home</a></li>
                    <li className='nav-li'><a href="#" className='nav-a'>Product</a></li>
                    <li className='nav-li'><a href="#" className='nav-a'>About</a></li>
                    <li className='nav-li'><a href="#" className='nav-a'>Contact</a></li>          
                {/* </ul> */}
            </div>
                <br/>
                <div className='nav-btn'>
                    <button type="" className='login-btn'>Login</button>
                    <button type="" className='member-btn'>Become a member</button>
                </div>
        </div>
    </>
  )
}
