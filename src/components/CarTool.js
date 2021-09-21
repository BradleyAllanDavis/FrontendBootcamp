import { useState } from 'react';
import { ToolFooter } from './ToolFooter';
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = (props) => {

  const [ cars, setCars ] = useState([ ...props.cars]);
  
  const addCar = (newCar) => {
    setCars([
      ...cars,
      {
        ...newCar,
        id: Math.max(...cars.map(c => c.id), 0) + 1
      },
    ]);
  }

  const deleteCar = (carId) => {
    const newCars= cars.filter(c => {
      return c.id !== carId;
    });
    setCars(newCars);
  };

  return (
    <>
      <ToolHeader header='CarTool'/>
      <CarTable cars={cars} onDeleteCar={deleteCar}/>
      <CarForm buttonText='Add Car' onSubmitCar={addCar}/>
      <ToolFooter footer='footer' />
    </>
  );
};