import PropTypes from 'prop-types';
import { CarViewRow } from "./CarViewRow";
import { carsPropType } from "../prop-types/cars";
import { CarEditRow } from './CarEditRow';

export const CarTable = ({ cars, editCarId, onEditCar: editCar, onDeleteCar: deleteCar }) => {

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) =>
            car.id === editCarId
            ? <CarEditRow key={car.id} car={car} />
            : <CarViewRow key={car.id} car={car} buttonText='Delete' onDeleteCar={deleteCar} onEditCar={editCar}/>
          )}
        </tbody>
      </table>
    </>
  );
};

CarTable.defaultProps = {
  cars: [],
  editCarId: -1,
};

CarTable.propTypes = {
  cars: carsPropType.isRequired,
  editCarId: PropTypes.string.isRequired,
  onEditCar:  PropTypes.func.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
};