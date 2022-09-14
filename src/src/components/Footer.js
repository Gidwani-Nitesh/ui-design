import React from "react";
import { RiSearchLine } from "react-icons/ri";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="search-button__container">
      <div className="search-icon">
        <RiSearchLine />
      </div>
    </div>
  );
};

export default Footer;
