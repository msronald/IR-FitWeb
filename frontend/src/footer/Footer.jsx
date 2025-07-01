import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt='' width="200px"/>
                <p> Este es un texto improvisado - Este es un texto improvisado - Este es un texto improvisado - Este es un texto improvisado</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt=''/>
                    <img src={assets.twitter_icon} alt=''/>
                    <img src={assets.linkedin_icon} alt=''/>
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>EMPRESA</h2>
                <ul>
                    <li>Inicio</li>
                    <li>Sobre nosotros</li>
                    <li>Delivery</li>
                    <li>Politica de privacidad</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>Contactanos</h2>
                <ul>
                    <li>+51-212-456-780</li>
                    <li>contacto@email.com</li>
                </ul>
            </div>
        </div>
        <hr></hr>
        <p className='footer-copyright'> Copyright 2025 © GreatFit.com - Todos los derechos reservados</p>
    </div>
  )
}

export default Footer
