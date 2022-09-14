import React from "react";
import Nav from "./Nav";
import BodyContainer from "./BodyContainer";
import "./Card.css";
import Footer from "./Footer";

const Card = () => {
  return (
    <div className="my-card_wrapper">
      <div className="my-card_inner_container">
        <Nav />
        <BodyContainer/>
        <Footer/>
      </div>
    </div>
  );
};

export default Card;
