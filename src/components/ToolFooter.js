import PropTypes from 'prop-types';

export const ToolFooter = ({ footer }) => {
  return (
    <footer>
      <small>{footer}</small>
    </footer>
  );
};

ToolFooter.defaultProps = {
  footer: 'The Footer',
};

ToolFooter.propTypes = {
  footer: PropTypes.string.isRequired,
}