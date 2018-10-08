import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

function GitHubIconButton(props) {
  return (
    <IconButton {...props} disabled={props.href === undefined ? true : false}>
      <SvgIcon>
        <svg fill={props.themeType ? 'black' : 'white'} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120.78 117.79'>
          <defs />
          <g id='Layer_2' data-name='Layer 2'>
            <g id='Layer_1-2' data-name='Layer 1'>
              <path className='cls-1' d='M60.39,0A60.39,60.39,0,0,0,41.3,117.69c3,.56,4.13-1.31,4.13-2.91,0-1.44-.06-6.2-.08-11.24C28.54,107.19,25,96.42,25,96.42c-2.75-7-6.7-8.84-6.7-8.84-5.48-3.75.41-3.67.41-3.67,6.06.43,9.26,6.22,9.26,6.22,5.39,9.23,14.13,6.56,17.57,5,.54-3.9,2.11-6.57,3.83-8.08C36,85.55,21.85,80.37,21.85,57.23A23.37,23.37,0,0,1,28.08,41c-.63-1.52-2.69-7.66.58-16,0,0,5.07-1.62,16.61,6.19a57.26,57.26,0,0,1,30.24,0C87,23.42,92.11,25,92.11,25c3.29,8.32,1.22,14.46.59,16a23.32,23.32,0,0,1,6.21,16.21c0,23.19-14.13,28.3-27.57,29.8,2.17,1.87,4.1,5.55,4.1,11.18,0,8.08-.07,14.58-.07,16.57,0,1.61,1.09,3.49,4.15,2.9A60.4,60.4,0,0,0,60.39,0Z'
              />
              <path className='cls-2' d='M22.87,86.7c-.13.3-.61.39-1,.18s-.68-.61-.54-.91.6-.39,1-.19.69.61.54.91Zm-.74-.55'
              />
              <path className='cls-2' d='M25.32,89.43c-.29.27-.85.14-1.23-.28a.92.92,0,0,1-.18-1.25c.3-.27.84-.14,1.24.28s.47,1,.17,1.25Zm-.58-.62'
              />
              <path className='cls-2' d='M27.7,92.91c-.37.26-1,0-1.35-.52s-.37-1.18,0-1.44,1,0,1.35.51.37,1.19,0,1.45Zm0,0'
              />
              <path className='cls-2' d='M31,96.27c-.33.37-1,.27-1.55-.23a1.16,1.16,0,0,1-.34-1.54c.34-.37,1-.26,1.56.23s.68,1.18.33,1.54Zm0,0'
              />
              <path className='cls-2' d='M35.46,98.22c-.15.47-.83.69-1.51.49s-1.13-.76-1-1.24.82-.7,1.51-.49,1.13.76,1,1.24Zm0,0'
              />
              <path className='cls-2' d='M40.4,98.58c0,.5-.56.91-1.28.92s-1.31-.39-1.31-.88.57-.91,1.29-.92,1.31.39,1.31.88Zm0,0'
              />
              <path className='cls-2' d='M45,97.8c.09.49-.41,1-1.13,1.12s-1.35-.17-1.44-.65.42-1,1.12-1.13,1.35.17,1.44.66Zm0,0'
              />
            </g>
          </g>
        </svg>
      </SvgIcon>
    </IconButton>

  );
}

GitHubIconButton.propTypes = {
  themeType: PropTypes.bool.isRequired,
  href: PropTypes.string,
  target: PropTypes.string
};

export default GitHubIconButton;