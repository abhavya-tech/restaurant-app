import React from "react";
import "./footer-overlay.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const FooterOverlay = () => {
  return (
    <div className="app__footerOverlay">
      <div className="app__footerOverlay_black"></div>
      <div className="app__footerOverlay_img app__bg"></div>
    </div>
  );
};

export default FooterOverlay;
