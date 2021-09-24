import { useCarToolStoreContext } from "../contexts/carToolStoreContext";

import { CarForm } from'../components/CarForm';

export const CarFormContainer = () => {
  const {
    appendCar,
    cancelEdit,
  } = useCarToolStoreContext();

  const addCar = (newCar) => {
    appendCar(newCar);
    cancelEdit();
  }

  return <CarForm buttonText={"Add Car"} onSubmitCar={addCar} />
};