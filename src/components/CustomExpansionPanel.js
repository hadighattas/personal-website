import React from 'react';
import PropTypes from 'prop-types';
import './CustomExpansionPanel.css';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from './CustomTypography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from './GitHubIconButton';

function CustomExpansionPanel(props) {
  const { heading, content, location, date, themeType } = props;
  return (
    <ExpansionPanel {...props} style={{ backgroundColor: themeType ? '#dddddd' : '#333333' }}  >
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
        <div className="expansionPanelSummary" >
          <div>
            <Typography style={{ fontWeight: 'bold' }} themeType={themeType}>
              {heading}
            </Typography>
            {renderLocation(location, themeType)}
          </div>
          <Typography themeType={themeType}>
            {date}
          </Typography>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="expansionPanelDetails">
        {content.map((value, index) => (
          <div key={index}>
            <Typography themeType={themeType}>
              {value}
            </Typography>
            <br />
          </div>
        ))}

      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

function renderLocation(location, themeType) {
  if (location !== undefined && location.includes('github')) {
    return (
      < GitHubIcon
        themeType={themeType}
        href={location}
        target="_blank"
      />
    );
  } else {
    return (
      <Typography variant='caption' themeType={themeType}>
        {location}
      </Typography>
    );
  }
}

CustomExpansionPanel.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.string,
  location: PropTypes.string,
  themeType: PropTypes.bool.isRequired
};

export default CustomExpansionPanel;
