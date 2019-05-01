import React from 'react';
import keg from '../assets/images/keg2.jpg';

function MainPicture(){
  const picture = {
    width: '100%',
    height: 'auto'
  }
  return (
    <div>
      <img style = { picture } src={ keg }/>
    </div>
  );
}

export default MainPicture;
