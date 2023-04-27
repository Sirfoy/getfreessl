import React from 'react'
import '../Styles/Box.css'
import icon1 from '../Assets/201.svg'
import Rectangle from '../Assets/Rectangle 1.svg'

const Boxes = () => {
  return (
    <div className="box">
      <div className="info">
        <div className="icon">
          <div className="verif">
            <img src={icon1} alt="verify" />
          </div>
          <div className="rec"></div>
        </div>

        <div className="content">
          <h1 className="verify_owner"> Verify Domain Ownership</h1>
          <p className="verify_para">
            Verify domain ownership Lorem ipsum dolor sit amet consectetur.
            Tellus id amet enim vitae massa. Pretium facilisis massa facilisi
            faucibus. Tempor quis mi fermentum diam vulputate porttitor. Metus
            ipsum viverra leo tortor sed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Boxes