import React from "react";
import add from "../../assets/images/add.png";
import logo from "../../assets/images/logo.jpg";
import recipes from "../../assets/data/recipes.json";
import Card from "../common/card";
import "./recipe-list.css";
import { useHistory } from "react-router-dom";

function RecipeList() {
  const history = useHistory();

  const handleRecipeSelection = (recipe) => {
    history.push("/recipe-details/" + recipe.id);
  };
  
  return (
    <>
      <div className="search-container">
        <img src={logo} className="back-arrow" alt="back arrow" />
        <input
          placeholder="Search here..."
          className="user-input med-right-mar"
        />
        <img
          src={add}
          className="back-arrow"
          alt="back arrow"
          onClick={() => history.push("/add-recipe")}
        />
      </div>

      {recipes.map((recipe) => (
        <Card
          key={recipe.id}
          recipe={recipe}
          onClick={() => handleRecipeSelection(recipe)}
        />
      ))}
    </>
  );
}

export default RecipeList;
