import PropTypes from 'prop-types';
import { useState } from 'react';

import { carPropType } from "../prop-types/cars";
import { colorsPropType } from '../prop-types/colors';

export const CarEditRow = ({ car, onSaveCar: saveCar, onCancelCar: cancelCar }) => {

  const [
    carForm,
    setCarForm,
  ] = useState({
    make: car.make,
    model: car.model, 
    year: car.year, 
    color: car.color, 
    price: car.price,
  });

  const change = e => {
    setCarForm({
      ...carForm,
      [ e.target.name ]: e.target.value,
    });
  };

  return (
    <tr>
      <td>id</td>
      <td><input type='text' id='make-input' name='make' onChange={change} value={carForm.make}/></td>
      <td><input type='text' id='model-input' name='model' onChange={change} value={carForm.model}/></td>
      <td><input type='text' id='year-input' name='year' onChange={change} value={carForm.year}/></td>
      <td><input type='text' id='color-input' name='color' onChange={change} value={carForm.color}/></td>
      <td><input type='text' id='price-input' name='price' onChange={change} value={carForm.color}/></td>
      <button type="button" onClick={() => null}>Save</button>
      <button type="button" onClick={() => null}>Cancel</button>
    </tr>
  );
};

CarEditRow.propTypes = {
  car: carPropType.isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};