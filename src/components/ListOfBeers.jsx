import React from "react";
import Beer from "./Beer";
import availableBeers from '../modelData/BeerList'

function ListOfBeers(){
  return (
    <div>
      {availableBeers.map((beer, index) =>
        <Beer name = {beer.name}
          brewery = {beer.brewery}
          alcoholPercent = {beer.alcoholPercent}
          region = {beer.region}
          key = {index}/>
      )}
    </div>
  );
}

export default ListOfBeers;
