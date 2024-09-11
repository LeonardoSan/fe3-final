import React from 'react'
import DH from "../../public/images/DH.png";
import facebook from "../../public/images/ico-facebook.png";
import tiktok from "../../public/images/ico-tiktok.png";
import instagram from "../../public/images/ico-instagram.png";
import whatsapp from "../../public/images/ico-whatsapp.png";

const Footer = () => {
  return (
    <>
      <p className='powered'>Powered by</p>
      <footer>
          <img src={ DH } className='logo' alt='DH-logo' />

          <div className="iconos">
            <img src={ facebook } alt='facebook-logo' />
            <img src={ tiktok } alt='tiktok-logo' />
            <img src={ instagram } alt='instagram-logo' />
            <img src={ whatsapp } alt='whatsapp-logo' />
          </div>
          
      </footer>
    </>
  )
}

export default Footer
