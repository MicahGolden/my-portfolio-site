import './Header.css'
import React from 'react'

const Header = () => {
  return (
    <div className='main-header'>
      <div className='home-row'> 
      <h1>Micah Golden</h1>
      <a href="https://github.com/MicahGolden"><i class="fab fa-github"></i></a>
      <a href="https://aerospace-dev.itch.io/"><i class="fab fa-itch-io"></i></a> 
      <a href="https://www.linkedin.com/in/micah-g-a034b81a9/"><i class="fab fa-linkedin"></i></a>
      </div>
    </div>
  )
}

export default Header