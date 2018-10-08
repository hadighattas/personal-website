import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/MailOutline';

function MailIconButton(props) {
  return (
    <IconButton {...props} disabled={props.href === undefined ? true : false}>
      <MailIcon style={{ color: props.themeType ? 'black' : 'white' }} />
    </IconButton>

  );
}

MailIconButton.propTypes = {
  themeType: PropTypes.bool.isRequired,
  href: PropTypes.string,
  target: PropTypes.string
};

export default MailIconButton;