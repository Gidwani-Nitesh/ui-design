import React from "react";
import "./RightpanelContainer.css";
import { AiFillStar, AiOutlineInfoCircle } from "react-icons/ai";
import { BiHeart, BiChevronRight } from "react-icons/bi";
import { BsStarHalf } from "react-icons/bs";

const RightpanelContainer = () => {
  return (
    <div className="body-container__right">
      <div className="product-info">
        <div className="product-name__container">
          <div className="product-name">llana</div>
          <div className="heart-icon__container">
            <BiHeart className="heart-icon" />
          </div>
        </div>
        <div className="product-desc">
          A sectional sofa or an L shaped sofa can make a great additon to your
          living room based on your needs.
        </div>
        <div className="product-price__container">
          <div className="product-price">$ 430.99</div>
          <div className="product-rating">
            <div className="stars-container">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <BsStarHalf className="bs-star" />
            </div>
            <a className="product__reviews" href="/">
              441 reviews
            </a>
          </div>
        </div>
        <div className="product-color-options">
          <div className="color-title">Colour</div>
          <div className="color__options">
            <div className="color orange"></div>
            <div className="color burlywood"></div>
            <div className="color blueish"></div>
            <div className="color greenish"></div>
            <div className="color violet"></div>
          </div>
        </div>
        <div className="btn-group">
          <button className="button">Buy Now</button>
          <button className="button btn-black">Add to basket</button>
        </div>
        <div className="product-other-info">
          <div className="other-info">
            <div className="inner-flex-container">
              <div className="inner-flex-item-1">
                <span>
                  Dispached in 5-7 weeks &nbsp;
                  <a href="/">
                    <AiOutlineInfoCircle className="info-icon" />
                  </a>
                </span>
                <br />
                <a href="/" className="span-underlined">
                  Why the longer lead time?
                </a>
              </div>
              <div className="inner-flex-item-2">
                <BiChevronRight className="color-grey" />
              </div>
            </div>
            <hr className="color-hr" />
          </div>
          <div className="inner-flex-container">
            <div className="inner-flex-item-11">
              Home Delivery - $ 10 
            </div>
            <div className="inner-flex-item-2 div-position">
              <BiChevronRight className="color-grey"/>
            </div>
          </div>
          <hr className="position-hr color-hr" />
        </div>
      </div>
    </div>
  );
};

export default RightpanelContainer;
