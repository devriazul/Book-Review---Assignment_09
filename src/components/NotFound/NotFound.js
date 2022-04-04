import React from "react";
import "./NotFound.css";
import img from './../../images/hanging_404.gif'
const NotFound = () => {
  return (
    <div>
      <img src={img} alt="Error 404" className="error-img" />
    </div>
  );
};

export default NotFound;
