import './Footer.scss'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faReact, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer-main'>
      <h1>Making Your Dreams a Reality!</h1>
      <div className='icons'>
      <FontAwesomeIcon icon={faJsSquare} size="3x" />
      <FontAwesomeIcon icon={faReact} size="3x" />
      <FontAwesomeIcon icon={faGithubSquare} size="3x" />
      </div>
    <div>
    
  </div>
    
  

  </div>
  )
}

export default Footer;