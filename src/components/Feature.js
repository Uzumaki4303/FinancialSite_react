import React from 'react';
import '../css/Features.css';
import  person_icon from '../images/person-icon.svg';
 
export default function Feature() {
  return (
    <>
        <div className='feature'>
            <div className='fe-container'>
                <div className='fe-content-1'>
                    <div className='fe-info' >
                        <a href="/">
                            <img className='fe-img' id='fe-img' src={person_icon} alt=""/>
                        </a>
                        <h4>Personalized Financial <br/>Guidance</h4>
                    </div>
                    <p>
                        Tailored financial advice to meet your 
                        unique goals and circumstances.

                    </p>
                </div>

                <div className='fe-content-2'>
                    <div className='fe-info'>
                        <img className='fe-img' src={person_icon} alt=""/>
                        <h4>Education for Financial Empowerment</h4>
                    </div>
                    <p>
                        Informative resources to enhance your financial
                        literacy and make informed decisions.

                    </p>
                </div>

                <div className='fe-content-3'>
                    <div className='fe-info'>
                        <img className='fe-img' src={person_icon} alt=""/>
                        <h4>Investment Portfolio <br/>Analysis</h4>
                    </div>
                    <p>
                        Detailed analysis of your investment portfolio 
                        to maximize returns and minimize risks.

                    </p>
                </div>
                
            </div>
            
        </div>


    </>

)
}
