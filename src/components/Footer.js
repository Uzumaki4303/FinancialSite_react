import React from 'react';
import '../css/Footer.css';
// import '../css/newFooter.css';

import facebook_img from '../images/facebook.svg';
import insta_img from '../images/insta.svg';
import twitter_img from '../images/twitter.svg';

export default function Footer() {
  return (
    <>
        <div className='footer'>
            <div className='ft-container'>
                <div className='get-in-touch'>
                        <h2>get in touch</h2>
                        <p>the quick fox jump over <br/>the lazy dog</p>
                        <div className='ft-imgs'>  
                            <a href="/"><img src={facebook_img} alt="facebook-img"/> </a>
                            <a href="/"><img src={insta_img} alt="insta-img"/></a>
                            <a href="/"><img src={twitter_img} alt="twitter-img"/></a>
                        </div>
                </div>
                <div className='compani-info'>
                    <ul className='ft-ul'>
                        <h2>company info</h2>
                        <li className='ft-li'><a href="/">about us</a></li>
                        <li className='ft-li'><a href="/">carrier</a></li>
                        <li className='ft-li'><a href="/">we are hiring</a></li>
                            <li className='ft-li'><a href="/">blog</a></li>
                    </ul>
                </div>
                <div className='features'>
                    <ul className='ft-ul'>
                    <h2>features</h2>
                     <li className='ft-li'><a href="/">business marketing</a></li>
                     <li className='ft-li'><a href="/">user analytic</a></li>
                     <li className='ft-li'><a href="/">live chat</a></li>
                     <li className='ft-li'><a href="/">unlimited support</a></li>
                    </ul>
                </div>
                <div className='resources'>
                    <ul className='ft-ul'>
                        <h2>resources</h2>
                        <li className='ft-li'><a href="/">IOS & android</a></li>
                        <li className='ft-li'><a href="/">watch a demo</a></li>
                        <li className='ft-li'><a href="/">customers</a></li>
                        <li className='ft-li'><a href="/">API</a></li>
                    </ul>

                </div>
            </div>
                <h3 className='ft-msg'>Made with love by frontend all right reserved</h3>
        </div>
    </>
  )
}