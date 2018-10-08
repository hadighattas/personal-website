import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

function CustomTypography(props) {
  return (
    <Typography style={{ color: props.themeType ? 'black' : 'white', ...props.style }} >
      {props.children}
    </Typography>
  );
}

CustomTypography.propTypes = {
  themeType: PropTypes.bool.isRequired,
  children: PropTypes.string,
  style: PropTypes.object
};

export default CustomTypography;