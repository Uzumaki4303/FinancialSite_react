import React from 'react';
import '../css/Register_form.css';

export default function Register_form() {

  return (
    <div className='registration'>
        <div className='form-container'>
          <h4>Contact Us</h4>
          <h1>Make an Appointment</h1>
            
        <form>  
            <div className='registration-form'>
              <input className='form-input' type="text" placeholder='Full Name' required/> 
              <input className='form-input' type='email' placeholder='email' required/>
              <input className='form-input' type='date' placeholder='Select Date' required/>
              <input className='form-input' type='time' defaultValue='04:00 AM' placeholder='Select Time' required/>
            </div>
              <textarea rows="5" cols="50" placeholder='Message'></textarea>
              <button className='form-btn1' type="submit">Book Appointment</button>
        </form>
          </div>
        <div className='form-info'>
          <div className='form-info1'>
            <h1>Consulting Agency for your bussiness</h1>
            <p>the quick fox jumps over the lazy dog</p>  
          </div>
          <div className='form-info2'>
            <button className='form-btn2' type="button">Contact Us</button>          
          </div>
        </div>
    </div>
  )
}
