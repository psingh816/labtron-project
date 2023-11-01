import React from 'react';
import { IoIosCall } from 'react-icons/io';
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
} from 'react-icons/ti';

function Navbar() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#2f8e94',
        justifyContent: 'space-around',
      }}
    >
      <div>
        <a href='#'>
          <TiSocialFacebook />
        </a>
        <a href='#'>
          <TiSocialTwitter />
        </a>
        <a href='#'>
          <TiSocialLinkedin />
        </a>
        <a href='#'>
          <TiSocialInstagram />
        </a>
      </div>
      <div>
        <IoIosCall />
        <span>+245 124586 414</span>
      </div>
      <div>My Account</div>
    </div>
  );
}

export default Navbar;
