import React from "react";
import "./sub-heading.css";
import { images } from "../../constants";
const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: " " }}>
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="image spoon" className="spoon_img" />
    </div>
  );
};

export default SubHeading;
