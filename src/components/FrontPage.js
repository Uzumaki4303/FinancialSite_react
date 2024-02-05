import React from "react";
import "../css/FrontPage.css";
import front_img from "../images/front_img.jpg";
export default function FrontPage() {
  return (
    <>
      <div className="fp-container">
        <div className="fp-content">
          <div className="detail">
            <p className="info">
              {" "}
              Financial <br />
              assistance With <br />
              True purpose{" "}
            </p>
            <p className="sub-info">
              we know how large object will act, <br />
              but things on small scale.
            </p>
            <div className="fp-btn">
              <button type="" className="fp-btn1">
                get quote now
              </button>
              <button type="" className="fp-btn2">
                learn more
              </button>
            </div>
          </div>
        </div>
        <div className="fp-img">
          <img src={front_img} alt="Image not load" className="fp-img1" />
        </div>
      </div>
    </>
  );
}
