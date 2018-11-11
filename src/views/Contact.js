import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

import { Button } from '@material-ui/core';
import Typography from '../components/CustomTypography';
import LinkedInIconButton from '../components/LinkedInIconButton';
import InstagramIconButton from '../components/InstagramIconButton';
import MailIconButton from '../components/MailIconButton';
import TwitterIconButton from '../components/TwitterIconButton';
import PhoneIconButton from '../components/PhoneIconButton';

class Contact extends Component {
  render() {
    const themeType = false; //setting as false to get white text
    return (
      <div className="contact">
        <div className="contactButtonContainer">
          <Button className="contactButton" variant="contained" color="secondary" href="mailto:hadighattas97@gmail.com">
            <MailIconButton themeType={themeType} />
            <Typography themeType={themeType}>Personal Email</Typography>
          </Button>
        </div>

        <div
          className="contactButtonContainer"
          style={{ animationDelay: '50ms' }}
        >
          <Button className="contactButton" variant="contained" color="secondary" href="mailto:hsg05@mail.aub.edu">
            <MailIconButton themeType={themeType} />
            <Typography themeType={themeType}>AUB Email</Typography>
          </Button>
        </div>

        <div
          className="contactButtonContainer"
          style={{ animationDelay: '100ms' }}
        >
          <Button className="contactButton" variant="contained" color="secondary" href="https://linkedin.com/in/hadi-ghattas" target="_blank">
            <LinkedInIconButton themeType={themeType} />
            <Typography themeType={themeType}>LinkedIn</Typography>
          </Button>
        </div>

        <div
          className="contactButtonContainer"
          style={{ animationDelay: '150ms' }}
        >
          <Button className="contactButton" variant="contained" color="secondary" href="https://twitter.com/hadighattas" target="_blank">
            <TwitterIconButton themeType={themeType} />
            <Typography themeType={themeType}>Twitter</Typography>
          </Button>
        </div>

        <div
          className="contactButtonContainer"
          style={{ animationDelay: '200ms' }}
        >
          <Button className="contactButton" variant="contained" color="secondary" href="https://instagram.com/hadighattas" target="_blank">
            <InstagramIconButton themeType={themeType} />
            <Typography themeType={themeType}>Instagram</Typography>
          </Button>
        </div>

        <div
          className="contactButtonContainer"
          style={{ animationDelay: '250ms' }}
        >
          <Button className="contactButton" variant="contained" color="secondary" href="tel:0096170019648" target="_blank">
            <PhoneIconButton themeType={themeType} />
            <Typography themeType={themeType}>Phone</Typography>
          </Button>
        </div>

      </div>
    );
  }
}

Contact.propTypes = {
  themeType: PropTypes.bool.isRequired
};

export default Contact;
