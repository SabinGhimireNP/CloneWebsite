import React from 'react'
import Logo from '../Logo'


function Footer() {
  return (
    <div className='Footer'>
      <div className="TopFooter">
        <div className="Logo">
          <Logo />
        </div>
        <div className="Links">
          <div className="link"><button>
            Butwal, Rupendehi
          </button></div>
          <div className="link"><button> 
            9841148149
          </button></div>
          <div className="link"><button> 
            admin@sanchitpandey.com.np
          </button></div>
          </div>
      </div>

      <div className="BottomFooter">
        <div className="Copyright">
           <p>Copyright © All Rights Reserved-2023</p>
           </div>
           <div className="Designed">

            <div className="top">
             <p>Designed & Developed by Sanchit Pandey</p>
            </div>
            <div className="bottom">
              <p>Sanchit Pandey.</p>
              </div>
           </div>
      </div>
    </div>
  )
}

export default Footer