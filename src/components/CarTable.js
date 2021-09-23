import PropTypes from 'prop-types';
import { CarViewRow } from "./CarViewRow";
import { carsPropType } from "../prop-types/cars";
import { CarEditRow } from './CarEditRow';

const dataCols = [
  { name: 'id', caption: 'Id' },
  { name: 'make', caption: 'Make' },
  { name: 'model', caption: 'Model' },
  { name: 'year', caption: 'Year' },
  { name: 'color', caption: 'Color' },
  { name: 'price', caption: 'Price' },
];

export const CarTable = ({
  cars,
  editCarId,
  carsSort: { col, dir },
  onEditCar: editCar,
  onCancelEdit: cancelEdit,
  onSaveCar: saveCar,
  onDeleteCar: deleteCar,
  onSortCars: sortCars,
}) => {

  const sortArrow = aCol => {
    if (col === aCol) {
      return dir === 'asc' ? 'v' : '^';
    } else {
      return '';
    }
  }

  const SortHeaderCol = ( { col: { name, caption } }) => {
    return (
      <th><button type='button' onClick={() => sortCars(name)}>{caption} {sortArrow(name)}</button></th>
    );
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            {dataCols.map(dataCol => <SortHeaderCol key={dataCol.id} col={dataCol} />)}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) =>
            car.id === editCarId
            ? <CarEditRow key={car.id} car={car} onSaveCar={saveCar} onCancelEdit={cancelEdit}/>
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
  carsSort: {
    col: 'id',
    dir: 'asc',
  },
};

CarTable.propTypes = {
  cars: carsPropType.isRequired,
  carsSort: PropTypes.shape({
    col: PropTypes.func.isRequired,
    dir: PropTypes.func.isRequired,
  }),
  editCarId: PropTypes.string.isRequired,
  onEditCar:  PropTypes.func.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
  onSortCars: PropTypes.func.isRequired,
};