import React from 'react'
import '../../Style/Lander.css'

function Lander() {
  return (
   <>
   {/* Hero Lander */}
    <div className="HeroLander">
      <div className="LanderContent">
        <span className='hello'><b>Hello,</b></span>

        <span className='text'>
          I'm <span className="highlight">Sanchit</span>
          <br/>A Web Developer
        </span>

        <span className='description'>
           A developer who crafts digital experiences. Welcome to a World of Creative Possibilities where Vision Meets Design.
        </span>

        <a className="HireMe" href="#">
          <img className="HireMeImage" src="/Icon/HireMe.avif" alt="" />
          <span>Hire Me!</span>
        </a>
      </div>
      <div className="ImageContainer">
        <img src="/Sanchit.png" alt="Sanchit" />
      </div>
    </div>
    {/* About me */}
    <div className="AboutMe">
      <span>About Me</span>
      <span> <h1 className='aboutTitle'> What I do</h1></span>
      <span className='aboutDescption'>Namaste! I'm Sanchit Pandey a skilled Front-End Developer, transforming designs into captivating web experiences. Proficient in HTML, CSS, JavaScript, React and Tailwind, I merge aesthetics with functionality to craft user-centric sites. Let's create a digital masterpiece together!</span>
      <div>
        <div className="btn">
          <img src="/Icon/gd.jpg" alt=""className='Icon' />
          <div>
            <h2>Graphics Design</h2>
            <p>रंगिन अनुभव प्रदान गर्दै</p>
          </div>
        </div>
        <div className="btn">
          <img src="/Icon/ui.jpg" alt=""className='Icon'  />
          <div>
            <h2>UI/UX Design</h2>
            <p>रंग र रूपले नयाँ कथा बोलाउँदै</p>
          </div>
        </div>
        <div className="btn">
          <img src="/Icon/web.jpg" alt="" className='Icon'  />
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
      <h1>Contact Me</h1>
      <div>
        <div className="left">
          <h2>Get in Touch</h2>
          <p>
            <b>Email: </b>admin@sanchitpandey.com.np
          </p>
          <p>
            <b>Phone: </b>+977 9841148149
          </p>

          <div>
           <a href="">Facebook</a>
           <a href="">GitHub</a>
           <a href="">Instagram</a>
          </div>
      </div>

      <form action="">
        <h2>Contact Form</h2>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
   </>
  )
}

export default Lander