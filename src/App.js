import React from 'react';
import { Route, Switch } from "react-router";
import { Redirect } from "react-router-dom";
import AddRecipe from "./components/add-recipe/AddRecipe";
import RecipeDetails from "./components/recipe-details/RecipeDetails";
import RecipeList from "./components/recipe-list/RecipeList";
import SignIn from "./components/signin/signin";
import SignUp from "./components/signup/Signup";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/recipe-list" component={RecipeList} />
        <Route path="/add-recipe" component={AddRecipe} />
        <Route path="/recipe-details/:id" component={RecipeDetails} />
        <Redirect from="/" to="/signup" />
      </Switch>
    </div>
  );
}

export default App;
