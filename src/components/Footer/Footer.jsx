import React from 'react';
import { CDBBox } from "cdbreact";
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.css"

export const Footer = () => {
  return (
    <CDBBox className=" foot shadow">
      <CDBBox display="flex" flex="column" className=" foot mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark ">
            <img className='logo_' src={require("./photo.png")} alt="" />
            </a>
          </CDBBox>
          <CDBBox className="bl">
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Devwares
            </p>
            <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0',  }}>
              <Link href="/">Resources</Link>
              <Link href="/">About Us</Link>
              <Link href="/">Contact</Link>
              <Link href="/">Blog</Link>
            </CDBBox>
          </CDBBox>
          <CDBBox className="bl">
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Help
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <Link href="/">Support</Link>
              <Link href="/">Sign Up</Link>
              <Link href="/">Sign In</Link>
            </CDBBox>
          </CDBBox>
          <CDBBox className="bl">
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Products
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <Link href="/">Windframe</Link>
              <Link href="/">Loop</Link>
              <Link href="/">Contrast</Link>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox
          display="flex"
          justifyContent="center"
          style={{ width: '100%' }}
          className="mx-auto mt-4"
        >
            <div className='social'> 
            <span >SOCIAL MEDIA</span>
            <br />
          <a className='ic' href=""><InstagramIcon/></a>
          <a className='ic' href=""><FacebookIcon/></a>
          <a className='ic' href=""><YouTubeIcon/></a>
            </div>
            
    
        </CDBBox>
        <small className="text-center mt-5">&copy; Chocolate shop 2022.</small>
      </CDBBox>
      </CDBBox>
  );
};


export default Footer;