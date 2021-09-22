import { useState } from 'react';
import { ToolFooter } from './ToolFooter';
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { carsPropType } from "../prop-types/cars";

export const CarTool = ({ cars: initialCars }) => {

  const [ cars, setCars ] = useState([ ...initialCars]);

  const [ editCarId, setEditCarId ] = useState(-1);
  
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
    setCars(cars.filter(c => c.id !== carId));
  };
  
  const resetEdit = () => { 
    setEditCarId(-1);
  };

  return (
    <>
      <ToolHeader header='CarTool'/>
      <CarTable cars={cars} editCarId={editCarId} onEditCar={setEditCarId} onCancelEdit={resetEdit} onDeleteCar={deleteCar}/>
      <CarForm buttonText='Add Car' onSubmitCar={addCar}/>
      <ToolFooter companyName='A Cool Company, Inc.' />
    </>
  );
};

CarTool.defaultProps = {
  cars: [],
};

CarTool.propTypes = {
  cars: carsPropType.isRequired,
};