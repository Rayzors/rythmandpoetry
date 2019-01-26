import React from 'react';
import SoundIcon from '../SoundIcon/SoundIcon';

export default (Wrapper = (props) => (
  <section>
    {props.children}
    <svg
      width="17"
      height="22"
      viewBox="0 0 17 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="7" width="5" height="15" fill="white" />
      <rect x="6" width="5" height="22" fill="white" />
      <rect x="12" y="4" width="5" height="18" fill="white" />
    </svg>
  </section>
));
