import React from "react";
import "../css/Strategy.css";
import media_png from "../images/media bg-cover.png";
import play_icon from "../images/play_icon.svg";

export default function Strategy() {
  return (
    <>
      <div className="strategy">
        <div className="st-container">
          <h1>
            Best Strategy <br />
            with Quality Business
          </h1>
          <p className="st-p">
            Problem trying to resolve the comflict between <br />
            the two major realms of Classical physics : Newtonian mechanics
          </p>
        </div>

        <div className="st-img">
          <img className="st-img1" src={media_png} alt="media_img" />
          <a href="/">
            <img className="st-img2" src={play_icon} alt="play_icon" />
          </a>
        </div>

        <div className="st-img-bg"></div>
      </div>
    </>
  );
}
