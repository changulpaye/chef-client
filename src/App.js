import React from 'react';
import { Route, Switch } from "react-router";
import AddRecipe from './components/add-recipe/AddRecipe';
import Navbar from './components/navbar/Navbar';
import SignIn from './components/signin/signin';
import RecipeList from './components/recipe-list/RecipeList';
import RecipeDetails from './components/recipe-details/RecipeDetails';
import SignUp from './components/signup/Signup';
import { Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      {/* <Navbar /> */}
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/recipe-list" component={RecipeList} />
        <Route path="/add-recipe" component={AddRecipe} />
        <Route path="/recipe-details/:id" component={RecipeDetails} />
        <Redirect  from="/" to="/signup" />
      </Switch>
    </div>
  );
}

export default App;
