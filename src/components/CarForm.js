import PropTypes from 'prop-types';
import { useForm } from '../hooks/useForm';

export const CarForm = ({ buttonText, onSubmitCar }) => {

  const [
    carForm,
    change,
    resetForm,
  ] = useForm({
    make: '',
    model: '', 
    year: 1900, 
    color: '', 
    price: 0,
  });

  const submitCar = () => {
    onSubmitCar({ ...carForm });
    resetForm();
  };

  return (
    <form>
      <label>
        Car Make:
        <input type="text" name="make" value={carForm.make} onChange={change} />
      </label><br></br>
      <label>
        Car Model:
        <input type="text" name="model" value={carForm.model} onChange={change} />
      </label><br></br>
      <label>
        Car Year:
        <input type="text" name="year" value={carForm.year} onChange={change} />
      </label><br></br>
      <label>
        Car Color:
        <input type="text" name="color" value={carForm.color} onChange={change} />
      </label><br></br>
      <label>
        Car Price:
        <input type="text" name="price" value={carForm.price} onChange={change} />
      </label><br></br>
      <button type="button" onClick={submitCar}>{buttonText}</button>
    </form>
  );
};

CarForm.defaultProps = {
  buttonText: 'Submit Car',
};

CarForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onSubmitCar: PropTypes.func.isRequired,
};