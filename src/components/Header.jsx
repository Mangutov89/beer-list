import React from "react";
import { Link } from 'react-router-dom';

function Header(){

  const flexHeader = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'monospace'
  };

  const sideNav = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  };
  const marginRight = {
    marginRight: '25px'
  };
  const marginLeft = {
    marginLeft: '25px'
  };

  return (
    <div style={ flexHeader }>
      <div style = { marginLeft }>
        <h1>BEER ROOM</h1>
      </div>
      <div style = { sideNav }>
        <Link to = "/" style = { marginRight }>ABOUT US</Link>
        <h1 style = { marginRight }>RECOMMEND A BEER</h1>
      </div>
    </div>
  );
}

export default Header;
