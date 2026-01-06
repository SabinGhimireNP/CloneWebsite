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
      <span>About Me</span>
      <span> <h1> What I do</h1></span>
      <span>Namaste! I'm Sanchit Pandey a skilled Front-End Developer, transforming designs into captivating web experiences. Proficient in HTML, CSS, JavaScript, React and Tailwind, I merge aesthetics with functionality to craft user-centric sites. Let's create a digital masterpiece together!</span>
      <div>
        <div className="btn">
          <img src="" alt="" />
          <div>
            <h2>Graphics Design</h2>
            <p>रंगिन अनुभव प्रदान गर्दै</p>
          </div>
        </div>
        <div className="btn">
          <img src="" alt="" />
          <div>
            <h2>UI/UX Design</h2>
            <p>रंग र रूपले नयाँ कथा बोलाउँदै</p>
          </div>
        </div>
        <div className="btn">
          <img src="" alt="" />
          <div>
            <h2>Web Development</h2>
            <p>वेब विकासमा भविष्य निर्माण गर्दै |</p>
          </div>
        </div>
      </div>
    </div>

    {/* Skills */}
    <div className="Skills">
      <span><p>My Skills & Tools</p></span>
      <span><h2>My Skills</h2></span>
      <span><p>I own a diverse range of talents and expertise that I have developed over the years. From technical skills such as programming, and Web Development, to creative abilities like Graphics Design, UI/UX and Content Writing.</p></span>
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>

    </div>

    {/* Contact Me */}
    <div className="ContactMe">
    </div>
   </>
  )
}

export default Lander