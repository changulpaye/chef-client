import React from "react";

import { Link } from "react-router-dom";
import propTypes from "prop-types";

function RecipeList({ recipes }) {
    return (
        <ul>
            {recipes.map((recipe) => (
                <li key={recipe.id}>
                    {" "}
                    <Link to={`/recipe/$recipe.id}`}>{recipe.name}</Link>

                </li>
            ))}
        </ul>
    );
}

export default RecipeList;