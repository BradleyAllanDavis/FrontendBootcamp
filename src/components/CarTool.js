import { useState } from 'react';

export const CarTool = (props) => {

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

  console.log(carForm);

  return (
    <>
      <header>
        <h1>Car Tool</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.cars.map(car => <tr key={car.id}>
            <td>{car.id}</td>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{car.color}</td>
            <td>{car.price}</td>
            </tr>)}
        </tbody>
      </table>
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
        <button type="button">Add Car</button>
      </form>
    </>
  );
};