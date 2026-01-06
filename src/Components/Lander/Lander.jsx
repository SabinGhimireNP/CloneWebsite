import React from 'react'
import '../../Style/Lander.css'

function Lander() {
  return (
   <>
   {/* Hero Lander */}
    <div className="HeroLander">
      <div className="LanderContent">
        <span>
          Hello,
        </span>

        <span>
          I'm
           <spam>Sanchit</spam>
           <br/>, a Web Developer
        </span>

        <span>
           A developer who crafts digital experiences. Welcome to a World of Creative Possibilities where Vision Meets Design.
        </span>

        <a className="HireMe">
          <img src="" alt="" />
           <span> Hire Me</span>
        </a>
      </div>
      <div className="ImageContainer">
      </div>
    </div>

    {/* About me */}
    <div className="AboutMe">
    </div>

    {/* Skills */}
    <div className="Skills">
    </div>

    {/* Contact Me */}
    <div className="ContactMe">
    </div>
   </>
  )
}

export default Lander