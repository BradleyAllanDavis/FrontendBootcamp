import PropTypes from 'prop-types';
import { carPropType } from "../prop-types/cars";
import { useForm } from '../hooks/useForm';

export const CarEditRow = ({
  car,
  onSaveCar,
  onCancelEdit: cancelEdit
}) => {

  const [
    carForm,
    change,
  ] = useForm({
    make: car.make,
    model: car.model, 
    year: car.year, 
    color: car.color, 
    price: car.price,
  });

  const saveCar = () => {
    onSaveCar({
      ...carForm,
      id: car.id,
    });
  };

  return (
    <tr>
      <td>{car.id}</td>
      <td><input type='text' id='make-input' name='make' onChange={change} value={carForm.make}/></td>
      <td><input type='text' id='model-input' name='model' onChange={change} value={carForm.model}/></td>
      <td><input type='text' id='year-input' name='year' onChange={change} value={carForm.year}/></td>
      <td><input type='text' id='color-input' name='color' onChange={change} value={carForm.color}/></td>
      <td><input type='text' id='price-input' name='price' onChange={change} value={carForm.price}/></td>
      <button type="button" onClick={saveCar}>Save</button>
      <button type="button" onClick={cancelEdit}>Cancel</button>
    </tr>
  );
};

CarEditRow.propTypes = {
  car: carPropType.isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};