import React from "react";
import { useHistory } from "react-router-dom";
import backArrow from "../../assets/images/back-arrow.png";
import "./add-recipe.css";
const AddRecipe = () => {
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
        <div className="header">Add Recipe </div>
      </div>

      <div className="add-recipe-form">
        <div className="med-mar">
          <input type="text" className="user-input" placeholder="Recipe Name" />
          <textarea
            className="user-input med-top-mar"
            placeholder="Enter recipe ingredients here"
            rows="10"
            cols="50"
          ></textarea>
          <textarea
            className="user-input med-top-mar"
            placeholder="Enter recipe instruction here"
            rows="10"
            cols="50"
          ></textarea>
        </div>
        <div className="row med-bottom-mar">
          <button className="button med-right-mar"> SAVE </button>
          <button className="button-outline"> CANCEL </button>
        </div>
      </div>
    </>
  );
};

export default AddRecipe;
