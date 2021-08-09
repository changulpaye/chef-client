import React from "react";
import { useHistory } from "react-router-dom";
import backArrow from "../../assets/images/back-arrow.png";
import "./recipe-details.css";

export default function RecipeDetails() {
  const history = useHistory();

  return (
    <>
      <div className="add-recipe-container">
        <img
          src={backArrow}
          className="back-arrow"
          alt="back arrow"
          onClick={() => history.goBack()}
        />
        <div className="header">Recipe Details </div>
      </div>
      <div className="detail-container" >
          Under Development
      </div>
    </>
  );
}
