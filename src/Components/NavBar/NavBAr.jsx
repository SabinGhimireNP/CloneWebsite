import React from 'react'
import Logo from '../Logo'
import '../../Style/NavBar.css'

function NavBar() {
  return (
    <div className='NavBar'>
      <div className="Logo">
        <Logo />
      </div>
      <div className="Links">
        <div className="link"><li> Home</li></div>
        <div className="link"><li> About</li></div>
        <div className="link"><li> Skills</li></div>
        <div className="link">
          <button className='ContactBtn'>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar