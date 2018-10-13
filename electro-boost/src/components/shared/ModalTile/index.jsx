import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ModalTile = ({ className, children }) => (
  <div className={className}>{children}</div>
);

ModalTile.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

ModalTile.defaultProps = {
  className: 'modal',
  children: {},
};

export default ModalTile;
