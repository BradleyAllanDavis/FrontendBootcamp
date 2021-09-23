import { ColorForm } from './ColorForm';
import { ColorList } from './ColorList';
import { ToolFooter } from './ToolFooter';
import { ToolHeader } from './ToolHeader';
import { colorsPropType } from '../prop-types/colors';
import { useList } from '../hooks/useList'

export const ColorTool = ({ colors: initialColors }) => {

  const [ colors, appendColor ] = useList([ ...initialColors]);

  return (
    <>
      <ToolHeader header='ColorTool'/>
      <ColorList colors={colors}/>
      <ColorForm buttonText='Add Color' onSubmitColor={appendColor} />
      <ToolFooter companyName='A Cool Company, Inc.' />
    </>
  );
};

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  colors: colorsPropType.isRequired,
};