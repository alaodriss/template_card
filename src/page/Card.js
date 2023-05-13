import React from "react";
import bgLeft from "../asstes/bg-main-desktop.png";

import "./home.scss";
import Form from "../components/Form";
const Card = () => {
  return (
    <div className="home_card">
      <img src={bgLeft} alt="img_bg" />
      <Form />
    </div>
  );
};

export default Card;
