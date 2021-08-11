import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import backArrow from "../../assets/images/back-arrow.png";
import "./add-recipe.css";
const AddRecipe = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleRecipeSave = () => {
    const insArray = instructions ? instructions.split("\n") : [];
    const ingArray = ingredients ? ingredients.split("\n") : [];
    const recipe = {
      title,
      instructions: insArray,
      ingredients: ingArray,
    };
    console.log(recipe);
  };
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
          <input
            type="text"
            className="user-input"
            placeholder="Recipe Name"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          <textarea
            className="user-input med-top-mar"
            placeholder="Enter recipe ingredients here"
            rows="10"
            cols="50"
            value={ingredients}
            onChange={(e) => setIngredients(e.currentTarget.value)}
          ></textarea>
          <textarea
            className="user-input med-top-mar"
            placeholder="Enter recipe instruction here"
            rows="10"
            cols="50"
            value={instructions}
            onChange={(e) => setInstructions(e.currentTarget.value)}
          ></textarea>
        </div>
        <div className="row med-bottom-mar">
          <button
            className="button-medium med-right-mar"
            onClick={handleRecipeSave}
          >
            SAVE
          </button>
          <button
            className="button-medium-outline"
            onClick={() => history.goBack()}
          >
            CANCEL
          </button>
        </div>
      </div>
    </>
  );
};

export default AddRecipe;
