import PropTypes from 'prop-types';

export const ToolHeader = ({ header }) => {
  return (
    <header>
      <h1>{header}</h1>
    </header>
  );
};

ToolHeader.defaultProps = {
  header: 'The Tool',
};

ToolHeader.propTypes = {
  header: PropTypes.string.isRequired,
}