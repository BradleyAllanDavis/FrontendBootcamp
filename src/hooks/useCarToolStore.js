import { useState } from 'react';

import { useSortedList } from './useSortedList';

export const useCarToolStore = (initialCars) =>  {

  const [
    cars, sortInfo, 
    appendCar, replaceCar, , removeCar, 
    sortOnColumn
  ] = useSortedList([ ...initialCars ]);

  const [ editCarId, setEditCarId ] = useState(-1);

  const editCar = carId => setEditCarId(carId);

  const cancelEdit = () => setEditCarId(-1);
  
  return {
    // stateful data
    cars, // equivalent to cars: cars,
    editCarId,
    sortInfo,

    // stateful functions
    appendCar,
    replaceCar,
    removeCar,
    sortOnColumn,
    editCar,
    cancelEdit,
  };

};