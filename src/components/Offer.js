import React from "react";
import "../css/Offer.css";
import tick_icon from "../images/tick.svg";

export default function Offer() {
  return (
    <div className="offer">
      <h1 className="offer-h1">Pricing</h1>
      <p className="offer-p1">
        Problem trying to resolve the comflict between <br />
        the two major realms of Classical physics : Newtonian mechanics
      </p>
      <div className="off-container">
        <div className="off-container1">
          <h1>FREE</h1>
          <h5>Oraganize across all apps by hand</h5>
          <div className="off-price">
            <h1>0</h1>
            <div>
              <h5>$</h5>
              <h5>Per month</h5>
            </div>
          </div>

          <div className="off-section">
            <div className="off-sec">
              <span>
                <img
                  className="tick-img"
                  src={tick_icon}
                  alt="Image on loading"
                />
              </span>
              <label for="">Unlimited Product Updates</label>
            </div>
            <div className="off-sec">
              <span>
                <img className="tick-img" src={tick_icon} alt="" />
              </span>
              <label for="">Unlimited Product Updates</label>
            </div>
            <div className="off-sec">
              <span>
                <img className="tick-img" src={tick_icon} alt="" />
              </span>
              <label for="">Unlimited Product Updates</label>
            </div>
            <div className="off-sec">
              <span id="lbl-2">
                <img className="tick-img" src={tick_icon} alt="" />
              </span>
              <label for="">1GB cloud storage</label>
            </div>
            <div className="off-sec">
              <span id="lbl-2">
                <img className="tick-img" src={tick_icon} alt="" />
              </span>
              <label for="">
                Email and community <br />
                support
              </label>
            </div>
          </div>
          <div className="off-btn-a">
            <button className="off-btn1" type="submit">
              Try for free
            </button>
          </div>
        </div>

        <div className="off-container2">
          <h1 id="off-container2-h1">STANDRAD</h1>
          <h5>Oraganize across all apps by hand</h5>
          <div className="off-price">
            <h1>19</h1>
            <div>
              <h5>$</h5>
              <h5>Per month</h5>
            </div>
          </div>

          <div className="off-section">
            <div className="off-sec">
              <span>
                <img className="tick-img" src={tick_icon} alt="" />
              </span>
              <label for="">Unlimited Product Updates</label>
            </div>
            <div className="off-sec">
              <span>
                <img className="tick-img" src={tick_icon} alt="" />
              </span>
              <label for="">Unlimited Product Updates</label>
            </div>
            <div className="off-sec">
              <span>
                <img className="tick-img" src={tick_icon} alt="" />
              </span>
              <label for="">Unlimited Product Updates</label>
            </div>
            <div className="off-sec">
              <span>
                <img className="tick-img" src={tick_icon} alt="" />
              </span>
              <label for="">1GB cloud storage</label>
            </div>
            <div className="off-sec">
              <span>
                <img className="tick-img" src={tick_icon} alt="" />
              </span>
              <label for="">
                Email and community <br />
                support
              </label>
            </div>
          </div>
          <div className="off-btn-a">
            <button className="off-btn1" type="submit">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
