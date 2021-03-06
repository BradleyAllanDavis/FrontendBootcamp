import PropTypes from 'prop-types';

import { carsPropType } from "../prop-types/cars";

export const CarViewRow = ({ car, onEditCar: editCar, onDeleteCar: deleteCar }) => {

  return (
    <>
      <tr>
        <td>{car.id}</td>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>{car.color}</td>
        <td>{car.price}</td>
        <td>
          <button type="button" onClick={() => deleteCar(car.id)}>Delete</button>
          <button type="button" onClick={() => editCar(car.id)}>Edit</button>
        </td>
      </tr>
    </>
  );
};

CarViewRow.propTypes = {
  car: carsPropType.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
  onEditCar: PropTypes.func.isRequired,
};