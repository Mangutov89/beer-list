import React from "react";
import Header from "./Header";
import ListOfBeers from "./ListOfBeers";
import MainPicture from "./MainPicture";
import About from './About';

import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <MainPicture/>
        <Switch>
          <Route exact path='/' component={About} />
        </Switch>
    </div>
  );
}

export default App;
