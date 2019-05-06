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
  const linkStyle = {
    color: 'white',
    fontFamily: 'monospace',
    textDecoration: 'none'
  }

  return (
    <div style={ flexHeader }>
      <div style = { marginLeft }>
        <Link to = "/">PDX Beerly Bar</Link>
      </div>
      <div style = { sideNav }>
        <Link to = "/about" style = { marginRight, linkStyle }>ABOUT US</Link>
        <Link to = "/addbeer" style = { marginRight }>ADD A BEER</Link>
      </div>
    </div>
  );
}

export default Header;
