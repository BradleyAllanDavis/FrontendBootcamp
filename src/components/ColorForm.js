import PropTypes from 'prop-types';
import { useState } from 'react';

export const ColorForm = ({ buttonText, onSubmitColor }) => {

  const [
    colorForm, // state data
    setColorForm, // function to update the state data and re-render
  ] = useState({
    name: '',
    hexcode: '',
  });

  const change = e => {
    setColorForm({
      ...colorForm, // spread operator to copy the properties from the original color form to the new color form
      [ e.target.name ]: e.target.value,
      // hexcode: e.target.value
    }); // new object literal, so we have a new object reference saying the state change
  };

  const submitColor = () => {
    onSubmitColor({ ...colorForm });
    setColorForm({
      name: '',
      hexcode: '',
    });
  };

  return (
    <form>
      <label>
        Color Name:
        <input type="text" name="name" value={colorForm.name} onChange={change} />
      </label>
      <label>
        Color Hexcode:
        <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
      </label>
      <button type="button" onClick={submitColor}>{buttonText}</button>
    </form>
  )
};

ColorForm.defaultProps = {
  buttonText: 'Submit Color',
};

ColorForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
};