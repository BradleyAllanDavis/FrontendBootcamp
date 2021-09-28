import { colorsPropType } from '../prop-types/colors';

import { ColorForm } from './ColorForm';
import { ColorList } from './ColorList';
import { ToolFooter } from './ToolFooter';
import { ToolHeader } from './ToolHeader';

export const ColorTool = ({
  colors,
  toggleSortButtonText,
  onAddColor: addColor,
  onDeleteColor: deleteColor,
  onSortColors: sortColors,
}) => {

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