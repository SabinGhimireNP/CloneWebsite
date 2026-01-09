import React from 'react'
import Logo from '../Logo'
import Hamburger from '../Hamburger/Hamburger'
import '../../Style/NavBar.css'

function NavBar() {
  return (
    <>
      <div className='NavBar Noraml'>
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

    <div className='NavBar Mobile'>
      <div className="Logo">
        </div>
        <div className="NavMenu">
        <div className="link"><li> Home</li></div>
        <div className="link"><li> About</li></div>
        <div className="link"><li> Skills</li></div>
        <div className="link">
          <button className='ContactBtn'>Contact</button>
        </div>
        </div>
      <Hamburger />
    </div>
    </>
  )
}

export default NavBar