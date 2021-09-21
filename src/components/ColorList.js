import { colorsPropType } from '../prop-types/colors';

export const ColorList = ({ colors }) => {
  return (
    <ul>
      {colors.map(({ id, name }) => <li key={id}>{name}</li>)}
    </ul>
  );
};

ColorList.defaultProps = {
  colors: [],
};

ColorList.propsTypes = {
  colors:  colorsPropType.isRequired,
};