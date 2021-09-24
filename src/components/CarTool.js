import { carsPropType } from "../prop-types/cars";
import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';

import { CarTableContainer } from '../containers/CarTableContainer';
import { CarFormContainer } from "../containers/CarFormContainer";

export const CarTool = ({ cars: initialCars }) => {

  return (
    <>
      <ToolHeader header='CarTool'/>
      <CarTableContainer />
      <CarFormContainer />
      <ToolFooter companyName='A Car Company, Inc.' />
    </>
  );
};

CarTool.defaultProps = {
  cars: [],
};

CarTool.propTypes = {
  cars: carsPropType.isRequired,
};