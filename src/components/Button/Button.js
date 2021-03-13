import React from 'react';

import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ onClick, children }) => {
  return (
    <button type="button" className="Button" onClick={onClick}>
      Load more
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
