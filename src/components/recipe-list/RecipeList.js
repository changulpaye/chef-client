import React, { useState } from "react";
import add from "../../assets/images/add.png";
import logo from "../../assets/images/logo.jpg";
import data from "../../assets/data/recipes.json";
import Card from "../common/card";
import "./recipe-list.css";
import { useHistory } from "react-router-dom";

function RecipeList() {
  const history = useHistory();

  const [recipes, setRecipes] = useState(data);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [searchValue, setSearchValue] = useState("");

  /** Filtering Recipes based on user search */
  const handleSearch = (e) => {
    let query = e.currentTarget.value;
    setSearchValue(query);
    let filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  /**Navigation to recipe details page */
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
          value={searchValue}
          onChange={handleSearch}
        />
        <img
          src={add}
          className="back-arrow"
          alt="back arrow"
          onClick={() => history.push("/add-recipe")}
        />
      </div>

      {filteredRecipes.map((recipe) => (
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
