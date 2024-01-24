import React from 'react';
import '../css/Review.css';
import user_icon from '../images/user-review-profile.png';
import filled_star from '../images/filled star.svg';
import empty_star from '../images/empty star.svg';

export default function Review() {
  return (
    <>
        <div className='testimonial'>
            <h1>What Clients Say</h1>
            <p className='testimonial-p1'>
                Problem trying to resolve the comflict between <br/>
                the two major realms of Classical physics : Newtonian mechanics
            </p>

            <div className='testimonials'>
                <img  className='user-img' src={user_icon} alt=""/>
                <p>
                    Slate helps you see how many more days you need <br/>
                    to work to teach your financial goal for the month and year.
                </p>
                <div className='rating'>
                    <img src={filled_star} alt=""/>
                    <img src={filled_star} alt=""/>
                    <img src={filled_star} alt=""/>
                    <img src={filled_star} alt=""/>
                    <img src={empty_star} alt=""/>
                </div>
                <h2>Regina Miles</h2>
                <h4>Designer</h4>
            </div>
        </div>
    </>
  )
}
