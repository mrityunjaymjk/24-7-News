import React from "react";
import facebook from "../assets/facebook.png";
import git from "../assets/github.jpg";
import twitter from "../assets/twitter.png";

export default function Footer() {
  return (
    <div className="container-1 bg-dark">
      <div className="icons">
        <img className="img"src={facebook} alt="" />
        <img className="img"src={git} alt="" />
        <img className="img"src={twitter} alt="" />
      </div>
      <div className="info">
        <li className="info-tag">Info</li>
        <li className="info-tag">Support</li>
        <li className="info-tag">Contact</li>
      </div>
    </div>
  );
}
