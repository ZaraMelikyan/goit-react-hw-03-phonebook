import PropTypes from 'prop-types';
import {
  StyledContainer,
} from 'components/Container/Container.styled';


const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

Container.defaultProps = {
  children: [],
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;