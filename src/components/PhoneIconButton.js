import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';

function PhoneIconButton(props) {
  return (
    <IconButton {...props} disabled={props.href === undefined ? true : false}>
      <PhoneIcon style={{ color: props.themeType ? 'black' : 'white' }} />
    </IconButton>

  );
}

PhoneIconButton.propTypes = {
  themeType: PropTypes.bool.isRequired,
  href: PropTypes.string,
  target: PropTypes.string
};

export default PhoneIconButton;