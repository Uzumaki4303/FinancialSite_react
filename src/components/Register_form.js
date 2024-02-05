import React from "react";
import "../css/Register_form.css";

export default function Register_form() {
  var date = new Date();
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0");
  var yyyy = date.getFullYear();

  date = yyyy + "-" + mm + "-" + dd;
  return (
    <div className="registration">
      <div className="form-container">
        <h4>Contact Us</h4>
        <h1>Make an Appointment</h1>

        <form>
          <div className="registration-form">
            <input
              className="form-input"
              type="text"
              placeholder="Full Name"
              required
            />
            <input
              className="form-input"
              type="email"
              placeholder="email"
              required
            />
            <input
              className="form-input"
              type="date"
              defaultValue={date}
              required
            />
            <input
              className="form-input"
              type="time"
              defaultValue={"12:00"}
              required
            />
          </div>
          <textarea rows="5" cols="50" placeholder="Message"></textarea>
          <button className="form-btn1" type="submit">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
