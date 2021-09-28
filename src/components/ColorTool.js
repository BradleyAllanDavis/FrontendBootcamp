import { useEffect } from 'react';

import { colorsPropType } from '../prop-types/colors';

import { ColorForm } from './ColorForm';
import { ColorList } from './ColorList';
import { ToolFooter } from './ToolFooter';
import { ToolHeader } from './ToolHeader';

export const ColorTool = ({
  colors,
  toggleSortButtonText,
  onRefreshColors: refreshColors,
  onAddColor: addColor,
  onDeleteColor: deleteColor,
  onSortColors: sortColors,
}) => {

  useEffect(function refreshColorsEffect() {
    console.log("refresh colors");
    refreshColors();
  }, [refreshColors]);

  return (
    <>
      <ToolHeader header='ColorTool'/>
      <ColorList colors={colors}
        toggleSortButtonText={toggleSortButtonText}
        onDeleteColor={deleteColor}
        onSortColors={sortColors}/>
      <ColorForm buttonText='Add Color' onSubmitColor={addColor}/>
      <ToolFooter companyName='A Color Company, Inc.' />
    </>
  );
};

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  colors: colorsPropType.isRequired,
};