import React from "react";
import PropTypes from 'prop-types';

function Beer(props){
  return (
    <div>
      <style jsx> {`
        h3 {
          font-size: 50px;
          font-weight: bold;
          font-family: monospace;
          border: 5px solid blue;
          padding: 10px 20px;
          margin-bottom: 5%;
        }
      `}
      </style>
      <h3>{props.name}</h3>
      <h4>Brewed in: {props.brewery}</h4>
      <p>Alcohol Percent: {props.alcoholPercent}</p>
      <p>Brewed from this region: {props.region}</p>
      <hr/>
    </div>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  brewery: PropTypes.string,
  alcoholPercent: PropTypes.string,
  region: PropTypes.string
};

export default Beer;
