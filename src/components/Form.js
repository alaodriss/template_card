import React, { useState } from "react";
import front from "../asstes/bg-card-front.png";
import back from "../asstes/bg-card-back.png";

import "./form.scss";
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    num: "",
    mm: "",
    yy: "",
    cvc: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="card_infos">
      <div className="cards">
        <div>
          <img src={front} alt="card_front" />
        </div>
        <div>
          <img src={back} alt="card_back" />
        </div>
      </div>
      <form id="form" onSubmit={handleFormSubmit}>
        <div className="box">
          <label htmlFor="name">
            CARDHOLDER NAME
            <input
              type="text"
              id="name"
              placeholder="e.g Jane Aplleseed"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="box">
          <label htmlFor="num">
            CARD NUMBER
            <input
              type="number"
              id="num"
              placeholder="e.g 1234 5678 9123 000"
              name="num"
              value={formData.num}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="box">
          <div className="data_ex^">
            <label htmlFor="mm">
              EXP.DATE
              <input
                type="number"
                id="mm"
                placeholder="MM"
                name="mm"
                value={formData.mm}
                onChange={handleInputChange}
              />
            </label>
            <label htmlFor="yy">
              (MM/YY)
              <input
                type="number"
                id="yy"
                placeholder="YY"
                name="yy"
                value={formData.yy}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="cvc">
            <label htmlFor="cvc">
              CVC
              <input
                type="number"
                id="cvc"
                placeholder="e.g 123"
                name="cvc"
                value={formData.cvc}
                onChange={handleInputChange}
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Confirm" />
      </form>
    </div>
  );
};

export default Form;
