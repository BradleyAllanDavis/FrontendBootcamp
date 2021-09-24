import { useCarToolStoreContext } from "../contexts/carToolStoreContext";

import { CarTable } from'../components/CarTable';

// Container component - connects a presentational subtree to the application store
//                     - generally not reuseable
export const CarTableContainer = () => {
  const {
    cars,
    editCarId,
    sortInfo,
    editCar,
    replaceCar,
    removeCar,
    cancelEdit,
    sortOnColumn,
  } = useCarToolStoreContext();

  const saveCar = (car) => {
    replaceCar(car);
    cancelEdit();
  };

  const deleteCar = (carId) => {
    removeCar(carId);
    cancelEdit();
  };

  // CarTable - presentional component, very reuasable, only uses props
  return <CarTable cars={cars}
        carsSort={sortInfo}
        editCarId={editCarId}
        onEditCar={editCar}
        onCancelEdit={cancelEdit}
        onSaveCar={saveCar}
        onDeleteCar={deleteCar}
        onSortCars={sortOnColumn} />;
};