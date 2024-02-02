import React from 'react';
import '../css/AboutUs.css';
import about_img from '../images/about.png';

export default function AboutUs() {
  return (
        <>
            <div className='about-us'>
                <div className='about-container1'>
                    <h1 className='container1-h1'>About Us</h1>
                    {/* <p className='container1-p'>
                        Problem trying to resolve the comflict between <br/>
                        the two major realms of Classical physics : Newtonian mechanics
                    </p> */}
                </div>

                <div className='about-container2'>
                    <img className='container2-img' src={about_img} alt="about_img"/>
                    <div className='container2-info'>
                        <h1 className='container2-h1'>A rethink of how we<br/> work</h1>
                        <p className='container2-p'>
                            Slate helps you see how many more days <br/>
                            you need to work to teach your financial <br/>
                            goal for the month and year. When you add <br/>
                            work to your Slate calander we <br/>
                            automatically calculate useful insight about <br/>
                            the financial health of your business.
                        </p>
                        <h4>Jim - Product Designer</h4>
                    </div>
                </div>

            </div>
        </>
    )
}
