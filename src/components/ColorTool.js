import { useState } from 'react';
import { ColorForm } from './ColorForm';
import { ColorList } from './ColorList';
import { ToolFooter } from './ToolFooter';
import { ToolHeader } from './ToolHeader';
import PropTypes from 'prop-types';
import { colorsPropType } from '../prop-types/colors';

export const ColorTool = ({ colors: initialColors }) => {

  const [ colors, setColors ] = useState([ ...initialColors]);

  const addColor = (newColor) => {
    setColors([
      ...colors,
      {
        ...newColor,
        id: Math.max(...colors.map(c => c.id), 0) + 1
      },
    ]);
  }
  
  return (
    <>
      <ToolHeader header='ColorTool'/>
      <ColorList colors={colors}/>
      <ColorForm buttonText='Add Color' onSubmitColor={addColor} />
      <ToolFooter footer='footer' />
    </>
  );
};

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  colors: colorsPropType.isRequired,
};