import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Home.css';

import { Paper, Button, SvgIcon } from '@material-ui/core';
import Typography from '../components/CustomTypography';
import GitHubIconButton from '../components/GitHubIconButton';
import LinkedInIconButton from '../components/LinkedInIconButton';
import InstagramIconButton from '../components/InstagramIconButton';
import MailIconButton from '../components/MailIconButton';
import TwitterIconButton from '../components/TwitterIconButton';
import PhoneIconButton from '../components/PhoneIconButton';

class Home extends Component {
  render() {
    const { themeType } = this.props;

    return (
      <div className="home">

        <Paper style={{
          width: '80vw',
          maxWidth: '500pt',
          backgroundColor: themeType ? '#dddddd' : '#333333',
          padding: 20,
          textAlign: 'center',
          marginBottom: '30pt'
        }}>


          <p>
            <Typography variant="title" themeType={themeType}>
              Current Position:
            </Typography>
            <br />
            <Typography variant="heading" themeType={themeType}>
              Student at American University of Beirut
            </Typography>
          </p >

          <p>
            <Typography className="title" variant="title" themeType={themeType}>
              Interests:
            </Typography>

            <div className="iconsContainer">

              <div className="iconContainer">
                <SvgIcon style={{ width: '100%', height: '100%' }}>
                  <svg fill='white' id='Capa_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 378.308 378.308'>
                    <path d='M343.296,255.716V241.71v-84.076V73.557c0-7.693-6.297-14.006-14.023-14.006H49.048 c-7.709,0-14.039,6.281-14.039,14.006v84.076v84.076v14.006L0,297.754c0,11.58,9.407,21.003,21.003,21.003h336.302 c11.596,0,21.003-9.423,21.003-21.003L343.296,255.716z M217.184,311.777h-56.028c-1.934,0-3.521-1.555-3.521-3.505 c0-1.95,1.587-3.505,3.521-3.505h56.028c1.934,0,3.521,1.555,3.521,3.505C220.673,310.222,219.118,311.777,217.184,311.777z M131.395,297.77l10.692-12.834h94.134l10.692,12.834H131.395z M323.563,230.937c0,6.757-5.504,12.231-12.215,12.231H66.958 c-6.711,0-12.215-5.52-12.215-12.231V84.36c0-6.757,5.504-12.231,12.215-12.231h244.39c6.711,0,12.215,5.504,12.215,12.231 C323.563,84.36,323.563,230.937,323.563,230.937z'
                    />
                    <path d='M260.444,160.108l10.692-16.053l-11.865-11.898l-16.07,10.692 c-1.713-0.872-3.602-1.412-5.409-2.047l-3.825-19.115h-16.831l-3.822,19.115c-1.824,0.651-3.68,1.173-5.409,2.047l-16.07-10.692 l-11.881,11.865l10.692,16.086c-0.888,1.73-1.619,3.57-2.238,5.442l-18.924,3.79v16.831l18.94,3.777 c0.619,1.888,1.348,3.68,2.238,5.458l-10.709,16.037l11.898,11.898l16.07-10.725c1.697,0.904,3.586,1.428,5.409,2.047 l3.822,19.147h16.831l3.822-19.147c1.808-0.619,3.664-1.143,5.409-2.047l16.053,10.725l11.898-11.898l-10.709-16.037 c0.904-1.746,1.619-3.57,2.238-5.458l18.924-3.777l0.032-16.831l-18.956-3.79C262.06,163.678,261.348,161.854,260.444,160.108z M225.561,197.388c-10.851,0-19.607-8.788-19.607-19.639c0-10.819,8.788-19.591,19.607-19.591 c10.819,0,19.639,8.788,19.639,19.591C245.197,188.584,236.409,197.388,225.561,197.388z'
                    />
                    <path d='M163.184,139.85c0.285-1.332,0.412-2.698,0.492-4.124l12.183-6.012l-3.029-11.405l-13.546,0.888 c-0.761-1.189-1.619-2.316-2.507-3.33l4.331-12.834l-10.249-5.918l-8.931,10.2c-1.315-0.269-2.698-0.317-4.062-0.395 l-6.093-12.28l-11.421,3.045l0.888,13.689c-1.095,0.777-2.3,1.49-3.301,2.348l-12.866-4.331l-5.902,10.249l10.184,8.947 c-0.285,1.332-0.412,2.698-0.476,4.091l-12.215,6.012l3.045,11.454l13.546-0.888c0.761,1.173,1.603,2.284,2.491,3.284 l-4.315,12.866l10.249,5.902l8.931-10.184c1.302,0.269,2.711,0.301,4.062,0.366l6.093,12.293l11.405-3.029l-0.872-13.689 c1.079-0.777,2.268-1.474,3.301-2.348l12.85,4.298l5.918-10.232L163.184,139.85z M139.865,147.544 c-7.376,1.966-14.91-2.394-16.879-9.756c-1.966-7.36,2.381-14.91,9.74-16.895c7.376-1.95,14.91,2.41,16.895,9.756 C151.591,137.994,147.211,145.561,139.865,147.544z'
                    />
                  </svg>
                </SvgIcon>
              </div>

              <div className="iconContainer" style={{ animationDelay: '0.1s' }}>
                <SvgIcon style={{ width: '100%', height: '100%' }}>
                  <svg fill='white' id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 120 120'>
                    <path d='M12,62A50,50,0,0,1,12-38a49.84,49.84,0,0,1,6.62.49C-1.87-34.07-16.29-21-22.64-6.1c-12.24,28.72,6.8,51.74,28,51.71,13.73,0,25.76-9.27,32.92-21,6.68-11,14.17-12.92,18.53-11.28a6.72,6.72,0,0,1,4.43,7.14A50,50,0,0,1,12,62M61.37,4.46C49.48-.92,37.15,7.23,29.74,19.4c-5,8.26-12.22,14-19.7,15.68C-6.76,38.9-23.38,21.15-13.43-2.18c6.71-15.74,25.6-31.46,56.93-24.63A49.93,49.93,0,0,1,61.37,4.45M72,12A60,60,0,1,0,12,72,60.11,60.11,0,0,0,72,12'
                      transform='translate(48 48)' />
                  </svg>
                </SvgIcon>
              </div>

              <div className="iconContainer" style={{ animationDelay: '0.2s' }}>
                <SvgIcon style={{ width: '100%', height: '100%' }}>
                  <svg fill='white' id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 120 90'>
                    <path d='M-23-23H-38v-5h15ZM17,2A15,15,0,1,0,32,17,15,15,0,0,0,17,2ZM72-18V57H-48V-18h29.65A10,10,0,0,0-10-22.45L-3-33H37l7,10.54A10,10,0,0,0,52.35-18ZM-23,2a5,5,0,0,0-5-5,5,5,0,0,0-5,5,5,5,0,0,0,5,5A5,5,0,0,0-23,2ZM42,17A25,25,0,1,0,17,42,25,25,0,0,0,42,17Z'
                      transform='translate(48 33)' />
                  </svg>
                </SvgIcon>
              </div>

              <div className="iconContainer" style={{ animationDelay: '0.3s' }}>
                <SvgIcon style={{ width: '100%', height: '100%' }}>
                  <svg fill='white' id='Capa_1' data-name='Capa 1' xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 309.7 463.51'>
                    <path d='M246.41,78.49a39.25,39.25,0,1,0-39.24-39.25A39.25,39.25,0,0,0,246.41,78.49Z'
                      transform='translate(-76.9)' />
                    <path d='M386.6,202.86a20.25,20.25,0,0,0-20.25-20.25H297.87l-38.62-54.83.13-.93a39.7,39.7,0,0,0-65.17-35.45V45.78A14.22,14.22,0,0,0,180,31.56H140.59a14.22,14.22,0,0,0-14.22,14.22v169a39.71,39.71,0,0,0,36,39.45l-3,7.07-23.86,90.14L81.71,423.58a24.3,24.3,0,1,0,39,29l56.53-75.95a24.25,24.25,0,0,0,4-8.29l16.27-61.41L242,347.82l-6.08,88.6a24.29,24.29,0,0,0,22.58,25.91c.55,0,1.12.06,1.69.06a24.29,24.29,0,0,0,24.21-22.64l6.88-100.26a24.29,24.29,0,0,0-7.82-19.56l-46-42.22,14-90.61,19.33,27.43a20.26,20.26,0,0,0,16.55,8.59h70.88l1.34,232.29a8.1,8.1,0,1,0,16.2,0l-1.34-234A20.22,20.22,0,0,0,386.6,202.86Z'
                      transform='translate(-76.9)' />
                  </svg>
                </SvgIcon>
              </div>

            </div>
          </p>

          <Typography className="title" variant="title" themeType={themeType}>
            Connect:
          </Typography>
          <LinkedInIconButton themeType={themeType} href="https://linkedin.com/in/hadi-ghattas" target="_blank" />
          <TwitterIconButton themeType={themeType} href="https://twitter.com/hadighattas" target="_blank" />
          <InstagramIconButton themeType={themeType} href="https://instagram.com/hadighattas" target="_blank" />


        </Paper>

        <Button variant="contained" color="secondary" href="https://github.com/hadighattas" target="_blank">
          <GitHubIconButton themeType={false} />
          <Typography themeType={false}>Check out my GitHub</Typography>
        </Button>

      </div >
    );
  }
}

Home.propTypes = {
  themeType: PropTypes.bool.isRequired
};

export default Home;
