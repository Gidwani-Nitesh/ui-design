import React from "react";
import "./BodyContainer.css";

import LeftpanelContainer from "./LeftpanelContainer";
import RightpanelContainer from "./RightpanelContainer";

const BodyContainer = () => {
  return (
    <div className="body-container-wrapper">
      <LeftpanelContainer />
      <RightpanelContainer />
    </div>
  );
};

export default BodyContainer;
