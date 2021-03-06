import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ExpansionSection.css';

import ExpansionPanel from '../components/CustomExpansionPanel';
import Typography from '../components/CustomTypography';

class ExpansionSection extends Component {

  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  }

  render() {
    const { themeType, values, title } = this.props;
    const { expanded } = this.state;
    return (
      <div className="expansionSection" {...this.props}>
        <Typography variant="title" themeType={themeType}>{title}</Typography>
        <div className="expansionSectionContent">
          {values.map((value, index) => (
            <ExpansionPanel
              key={index}
              themeType={themeType}
              heading={value.heading}
              content={value.content}
              location={value.location}
              date={value.date}
              expanded={expanded === index}
              onChange={this.handleChange(index)}
            />
          ))}
        </div>
      </div>
    );
  }
}

ExpansionSection.propTypes = {
  themeType: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired
};

export default ExpansionSection;