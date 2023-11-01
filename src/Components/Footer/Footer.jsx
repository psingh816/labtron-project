import React from 'react';
import CopyRight from './CopyRight';
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiSocialGooglePlus,
} from 'react-icons/ti';
import { RiSendPlaneFill } from 'react-icons/ri';

import Style from './Footer.module.css';
import logo from './logo.png';
import BestSeller from '../NavBar/BestSeller/BestSeller';
import QuickLinks from '../NavBar/QuickLinks/QuickLinks';

const Footer = () => {
  return (
    <>
    <div className={Style.footer} style={{ backgroundColor: 'black' }}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <img src={logo} alt='footer logo' />
          <p>
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>

          <div className={Style.footer_social}>
            <a href='#'>
              <TiSocialFacebook style={{ color: '#3b5998' }} />
            </a>
            <a href='#'>
              <TiSocialTwitter style={{ color: '#26a7de' }} />
            </a>
            <a href='#'>
              <TiSocialLinkedin style={{ color: '#0072b1' }} />
            </a>
            <a href='#'>
              <TiSocialGooglePlus style={{ color: '#db4a39' }} />
            </a>
          </div>
        </div>
        <div>
          <h3>Latest News</h3>

          <div className={Style.news}>
            <div className={Style.news}>
              <img src />
              <a href='#'>Did son unreserved themselves indulgence its</a>
            </div>
            <div className={Style.news}>
              <img src />
              <a href='#'>Rapturous am eagerness it as resolving household</a>
            </div>
          </div>
        </div>

        <div className={Style.footer_box_discover}>
          <h3>Quick Links</h3>
          <QuickLinks />
        </div>

        <div className={Style.footer_box_help}>
          <h3>Best Seller</h3>
          <BestSeller />
        </div>
      </div>
    </div>

    <CopyRight/>
    </>
  );
};

export default Footer;
