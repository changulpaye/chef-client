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
       <div className="header" >Add Recipe </div>
      </div>

      <div className="recipe-container">
          <div className="card large-mar">
              
          </div>
      </div>
    </>
  );
};

export default AddRecipe;
