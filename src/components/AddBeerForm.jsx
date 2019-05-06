import React from 'react';
import PropTypes from 'prop-types';

function NewBeerForm(props){
  let _name = null;
  let _brewery = null;
  let _alcoholPercent = null;
  let _region = null;

  function handleNewBeerFormSubmission(event) {
      event.preventDefault();
      props.onNewBeerCreation({name: _name.value, brewery: _brewery.value, alcoholPercent: _alcoholPercent.value, region: _region.value});
      _name.value = '';
      _brewery.value = '';
      _alcoholPercent.value = '';
      _region.value = '';
    }

  return (
    <div>
      <form onSubmit={handleNewBeerFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brewery'
          placeholder='Brewery'
          ref={(input) => {_brewery = input;}}/>
        <input
          type='text'
          id='alcoholPercent'
          placeholder='Alcohol Percent'
          ref={(input) => {_alcoholPercent = input;}}/>
        <input
          type='text'
          id='region'
          placeholder='Region'
          ref={(input) => {_region = input;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;
