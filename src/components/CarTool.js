import { useState } from 'react';
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';

export const CarTool = (props) => {

  const [ cars, setCars ] = useState([ ...props.cars]);
  
  const [
    carForm, // state data
    setCarForm, // function to update the state data and re-render
  ] = useState({
    make: '',
    model: '', 
    year: 1900, 
    color: '', 
    price: 0,
  });

  const change = e => {
    setCarForm({
      ...carForm,
      [ e.target.name ]: e.target.value,
    });
  };

  const addCar = () => {
    setCars([
      ...cars,
      { ...carForm, id: Math.max(...cars.map(c => c.id), 0) + 1 },
    ]);

    setCarForm({
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    });
  }

  const headerName = 'CarTool';

  return (
    <>
      <ToolHeader header={headerName}/>
      <CarTable cars={cars}/>
      <form>
        <label>
          Car Make:
          <input type="text" name="make" value={carForm.make} onChange={change} />
        </label>
        <label>
          Car Model:
          <input type="text" name="model" value={carForm.model} onChange={change} />
        </label>
        <label>
          Car Year:
          <input type="text" name="year" value={carForm.year} onChange={change} />
        </label>
        <label>
          Car Color:
          <input type="text" name="color" value={carForm.color} onChange={change} />
        </label>
        <label>
          Car Price:
          <input type="text" name="price" value={carForm.price} onChange={change} />
        </label>
        <button type="button" onClick={addCar}>Add Car</button>
      </form>
    </>
  );
};