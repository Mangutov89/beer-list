import React from "react";
import Header from "./Header";
import ListOfBeers from "./ListOfBeers";

import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={ListOfBeers} />
        </Switch>
    </div>
  );
}

export default App;
