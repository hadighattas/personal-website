import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

import { Paper, Button } from '@material-ui/core';
import Typography from '../components/CustomTypography';
import GitHubIconButton from '../components/GitHubIconButton';
import LinkedInIconButton from '../components/LinkedInIconButton';
import InstagramIconButton from '../components/InstagramIconButton';
import MailIconButton from '../components/MailIconButton';
import TwitterIconButton from '../components/TwitterIconButton';
import PhoneIconButton from '../components/PhoneIconButton';

class Contact extends Component {
  render() {
    const { themeType } = this.props;
    return (
      <div className="contact">
        <Button className="contactButton" variant="contained" color="secondary" href="mailto:hadighattas97@gmail.com">
          <MailIconButton themeType={themeType} />
          <Typography themeType={themeType}>Personal Mail</Typography>
        </Button>
        <br />
        <Button className="contactButton" variant="contained" color="secondary" href="mailto:hsg05@mail.aub.edu">
          <MailIconButton themeType={themeType} />
          <Typography themeType={themeType}>AUB Mail</Typography>
        </Button>
        <br />
        <Button className="contactButton" variant="contained" color="secondary" href="https://linkedin.com/in/hadi-ghattas" target="_blank">
          <LinkedInIconButton themeType={themeType} />
          <Typography themeType={themeType}>LinkedIn</Typography>
        </Button>
        <br />
        <Button className="contactButton" variant="contained" color="secondary" href="https://twitter.com/hadighattas" target="_blank">
          <TwitterIconButton themeType={themeType} />
          <Typography themeType={themeType}>Twitter</Typography>
        </Button>
        <br />
        <Button className="contactButton" variant="contained" color="secondary" href="https://instagram.com/hadighattas" target="_blank">
          <InstagramIconButton themeType={themeType} />
          <Typography themeType={themeType}>Instagram</Typography>
        </Button>
        <br />
        <Button className="contactButton" variant="contained" color="secondary" href="tel:0096170019648" target="_blank">
          <PhoneIconButton themeType={themeType} />
          <Typography themeType={themeType}>Phone</Typography>
        </Button>
        <br />
        <br />
        <br />

      </div>
    );
  }
}

Contact.propTypes = {
  themeType: PropTypes.bool.isRequired
};

export default Contact;
