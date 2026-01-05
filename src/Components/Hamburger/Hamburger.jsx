import React from 'react'
import '../../Style/Hamburger.css'

function Hamburger() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
   <>
           <div className={`Menu ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div></>
  )
}

export default Hamburger