import React from 'react';
import '../css/Navbar.css';
import hamburger_img from '../images/humburger icon.svg';
import shopping_img from '../images/shopping cart.svg';
import search_img from '../images/search.svg';
import cross from '../images/cross.png';

export default function Navbar() {
 
    function hamburger_on(e) {
        document.querySelectorAll('.nav-container')[0].style.left = '0';
        document.querySelectorAll('.nav-container')[0].style.transition=' all ease .5s';
        document.querySelectorAll('.cross_icon')[0].style.display = 'inherit';
        document.querySelectorAll('#mobile-nav-li')[1].style.display = 'none';
        document.querySelectorAll('#mobile-nav-li')[2].style.display = 'none';
        document.querySelectorAll('#mobile-nav-li')[3].style.display = 'none';
        document.querySelectorAll('.strategy')[0].style.display = 'none';
        document.querySelectorAll('.form-container')[0].style.display = 'none';
        document.querySelectorAll('body')[0].style.overflowY = 'hidden';
        e.preventDefault();
    }

    function hamburger_off(e) {
        document.querySelectorAll('.cross_icon')[0].style.display = 'none';
        document.querySelectorAll('#mobile-nav-li')[1].style.display = 'inherit';
        document.querySelectorAll('#mobile-nav-li')[2].style.display = 'inherit';
        document.querySelectorAll('#mobile-nav-li')[3].style.display = 'inherit';
        document.querySelectorAll('.nav-container')[0].style.left = '-100%';
        document.querySelectorAll('.nav-container')[0].style.transition = 'all ease .5s';
        document.querySelectorAll('.strategy')[0].style.display = 'flex';
        document.querySelectorAll('.tick-img')[0].style.display = 'inherit';
        document.querySelectorAll('.form-container')[0].style.display = 'grid';
        document.querySelectorAll('body')[0].style.overflowY = 'auto';
        
        e.preventDefault();
    }


  return (
    <>
        <div className='Navbar'>
            <h2 className='brand-name'>BrandName</h2>
            <div className='nav-container'>
                    <a href="#"><img className='cross_icon' id='mobile-nav-li' src={cross} alt="" onClick={hamburger_off}/></a>
                    <h2 className='mobile-brand-name'>BrandName</h2>

                    <li className='nav-li'><a href="#" className='nav-a'>Home</a></li>
                    <li className='nav-li'><a href="#" className='nav-a'>Product</a></li>
                    <li className='nav-li'><a href="#" className='nav-a'>About</a></li>
                    <li className='nav-li'><a href="#" className='nav-a'>Contact</a></li>          
            </div>
                <br/>
                <div className='nav-btn'>
                    <button type="" className='login-btn'>Login</button>
                    <button type="" className='member-btn'>Become a member</button>
                </div>

                <div className='mobile-nav'>
                    <a href="#" id='search_img'><img id='mobile-nav-li' src={search_img} alt=""/></a>
                    <a href="#" id='shopping_img'><img id='mobile-nav-li' src={shopping_img} alt=""/></a>
                    <a href="#" id='hamburger_img' onClick={hamburger_on}><img id='mobile-nav-li' src={hamburger_img} alt=""/></a>
                
                </div> 
                    
        </div>

    </>
  )
}
