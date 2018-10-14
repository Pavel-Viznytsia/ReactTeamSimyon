import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  className: 'modal',
  children: {},
};

const ModalTile = ({ className, children }) => (
  <div className={className}>{children}</div>
);

ModalTile.propTypes = propTypes;
ModalTile.defaultProps = defaultProps;

export default ModalTile;
