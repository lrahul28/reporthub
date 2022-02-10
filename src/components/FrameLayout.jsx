import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

const FrameLayout = ({ children = <Outlet /> }) => children;

FrameLayout.propTypes = {
  children: PropTypes.node
};

export default FrameLayout;
