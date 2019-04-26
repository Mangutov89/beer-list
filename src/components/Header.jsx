import React from "react";

function Header(){

  const flexHeader = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    border: '2px solid red',
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'monospace'
  };

  const sideNav = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  };

  return (
    <div style={ flexHeader }>
      <div>
        <h1>BEER ROOM</h1>
      </div>
      <div style = { sideNav }>
        <h1>ABOUT US</h1>
        <h1>RECOMMEND A BEER</h1>
      </div>
    </div>
  );
}

export default Header;
