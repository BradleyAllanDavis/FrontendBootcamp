import PropTypes from 'prop-types';

export const CarViewRow = ({ car, onDeleteCar: deleteCar }) => {

  return (
    <>
      <tr>
        <td>{car.id}</td>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>{car.color}</td>
        <td>{car.price}</td>
        <button type="button" onClick={deleteCar}>Delete</button>
      </tr>
    </>
  );
};

CarViewRow.propTypes = {
  car: carPropType.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
};