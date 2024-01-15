import React from 'react';
import '../css/Features.css';
import  person_icon from '../images/person-icon.svg';
 
export default function Features() {
  return (
    <>
        <div className='feature'>
            <div className='fe-container'>
                <div className='fe-content-1'>
                    <div className='fe-info' >
                        <a href="/">
                            <img className='fe-img' id='fe-img' src={person_icon} alt=""/>
                        </a>
                        <h4>The quick fox jump over the <br/>lazy dog</h4>
                    </div>
                    <p>
                        The quick fox jump over the lazy dog,
                        The quick fox jump over the lazy dog
                    </p>
                </div>

                <div className='fe-content-2'>
                    <div className='fe-info'>
                        <img className='fe-img' src={person_icon} alt=""/>
                        <h4>The quick fox jump over the <br/>lazy dog</h4>
                    </div>
                    <p>
                        The quick fox jump over the lazy dog,
                        The quick fox jump over the lazy dog
                    </p>
                </div>

                <div className='fe-content-3'>
                    <div className='fe-info'>
                        <img className='fe-img' src={person_icon} alt=""/>
                        <h4>The quick fox jump over the <br/>lazy dog</h4>
                    </div>
                    <p>
                        The quick fox jump over the lazy dog,
                        The quick fox jump over the lazy dog
                    </p>
                </div>
                
            </div>
            
        </div>


    </>

)
}
