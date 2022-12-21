import React from "react";
import "./footer.css";
import { images } from "../../constants";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />
      <div className="app__footer_links">
        <div className="app__footer_links-contact">
          <h1 className="app__footer_headtext">Contact Us</h1>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans"> +1 212-555-1230</p>
        </div>
        <div className="app__footer_links-logo">
          <img src={images.gericht} alt="footer logo" />
          <p className="p__opensans">
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <img
            src={images.spoon}
            alt="spoon logo"
            style={{ marginTop: "15px" }}
          />
          <div className="app__footer_links-icons">
            <FiFacebook />
            <FiInstagram />
            <FiTwitter />
          </div>
        </div>
        <div className="app__footer_links-work">
          <h1 className="app__footer_headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans"> 08:00 am -12:00 am</p>
          <p className="p__opensans"> Saturday-Sunday: </p>
          <p className="p__opensans"> 07:00am -11:00 pm</p>
        </div>
      </div>
      <div className="footer_coyright">
        <p className="p__opensans">2021 Gerícht. All Rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
