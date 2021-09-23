import { ColorForm } from './ColorForm';
import { ColorList } from './ColorList';
import { ToolFooter } from './ToolFooter';
import { ToolHeader } from './ToolHeader';
import { colorsPropType } from '../prop-types/colors';
import { useSortedList } from '../hooks/useSortedList';

export const ColorTool = ({ colors: initialColors }) => {

  const [
    colors, sortInfo, 
    appendColor, , , removeColor, 
    sortOnColumn
  ] = useSortedList([ ...initialColors ]);

  const toggleSortColors = () => {
    console.log(sortInfo)
    const { col: sortCol, dir: sortDir } = sortInfo;
    if (sortCol === 'id') {
      sortOnColumn('name');
    } else {
      if (sortDir === 'asc') {
        sortOnColumn('name'); // toggle it to desc
      } else {
        sortOnColumn('id');
      }
    }
  };

  const toggleSortButtonText = () => {
    const { col: sortCol, dir: sortDir } = sortInfo;
    if (sortCol === 'id') {
      return "Sorted by Id";
    } else {
      if (sortDir === 'asc') {
        return "Sorted by Name A->Z";
      } else {
        return "Sorted by Name Z->A";
      }
    }
  };

  return (
    <>
      <ToolHeader header='ColorTool'/>
      <ColorList colors={colors}
        toggleSortButtonText={toggleSortButtonText()}
        onDeleteColor={removeColor}
        onSortColors={toggleSortColors}/>
      <ColorForm buttonText='Add Color' onSubmitColor={appendColor}/>
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