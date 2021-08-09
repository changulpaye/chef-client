import React from 'react';
import { Route, Switch } from "react-router";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route>
          <Navbar />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
