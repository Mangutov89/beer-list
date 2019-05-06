import React from "react";
import Beer from "./Beer";
import PropTypes from 'prop-types';


function ListOfBeers(props){
  return (
    <div>
      {props.beerList.map((beer, index) =>
        <Beer name = {beer.name}
          brewery = {beer.brewery}
          alcoholPercent = {beer.alcoholPercent}
          region = {beer.region}
          key = {index}/>
      )}
    </div>
  );
}

ListOfBeers.propTypes = {
  beerList: PropTypes.array
};

export default ListOfBeers;
