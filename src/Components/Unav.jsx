import React from 'react'
import '../Styles/Unav.css'

const Unav = () => {
  return (
    <div className="main_wrapper">
      <div className="own_wrapper">
        <p className="own">Own a website for free in 5 Minutes</p>
        <button className="own_button">
          <span className='btn_text'> Learn More</span>
        </button>
      </div>

      <div className="own_box"></div>
    </div>
  );
}

export default Unav