import React from "react";
import "./LeftpanelContainer.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ProductCard from "./ProductCard";

const LeftpanelContainer = () => {
  return (
    <div className="body-container__left">
      <div className="left-body__top">
        <div className="display-image__label"></div>
        <div className="choose-image-container">
          <div className=" img img1"></div>
          <div className=" img img2"></div>
          <div className=" img img3"></div>
          <div className=" img img4"></div>
        </div>
      </div>
      <div className="left-body__bottom">
        <div className="bottom-inner-container">
          <div className="flex-container">
            <span className="text-content">Recently viewed</span>
          </div>
          <div className="btn-container">
            <button className="btn" disabled>
              <BiChevronLeft />
            </button>
            <button className="btn">
              <BiChevronRight />
            </button>
          </div>
        </div>
        <div className="items-container">
          <a href="/">
            <ProductCard
              className="item text-black"
              itempic="item__pic1-container"
              itemname="Lottie"
              itemprice="250.99"
            />
          </a>
          <a href="/">
            <ProductCard
              className="item "
              itempic="item__pic2-container"
              itemname="Primrose"
              itemprice="320.99"
            />
          </a>
          <a href="/">
            <ProductCard
              className="item"
              itempic="item__pic3-container"
              itemname="Lottie"
              itemprice="243.99"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftpanelContainer;
