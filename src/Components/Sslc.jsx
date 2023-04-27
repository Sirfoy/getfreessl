import React from "react";
import "../Styles/Sslc.css";
import https from '../Assets/https.svg'
import pic1 from '../Assets/Bene1.svg'
import pic2 from "../Assets/shield.svg"
import pic3 from '../Assets/ticitc.svg'

const Sslc = () => {
  return (
    <div className="smain_wrapper">
      <div className="scontent">
        <div className="sframe">
          <div className="sinput">
            <div className="sinput_wrapper">
              <div className="sinput_img">
                <img src={https} alt="https" />
              </div>

              <input
                className="stext_input"
                type="text"
                placeholder="Enter Primary Domain"
              />
            </div>
            <button className="sbutton">
              <span className="sbutton_text">Generate ssl certificate</span>
            </button>
          </div>
        </div>
        <div className="stext">
          <h1 className="get_free">
            Get free SSL certificate, valid for 90 days.
          </h1>
          <p className="details">
            Lorem ipsum dolor sit amet consectetur. Egestas turpis sit in
            libero. Diam vel vulputate integer curabitur nisi eu. Egestas
            pellentesque eget feugiat feugiat aliquam est neque.
          </p>
        </div>
      </div>

      <div className="sbenefits">
        <div className="slist">
          <div className="sbenefit1">
            <div className="beneicon1">
              <img src={pic1} alt="icon" />
            </div>
            <div className="bene1text">
              <h2 className="free">Free Forever</h2>
              <p className="freep">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
          </div>

          <div className="sbenefit2">
            <div className="beneicon1">
              <img src={pic2} alt="icon" />
            </div>
            <div className="bene1text">
              <h2 className="free">Trusted certificate authority</h2>
              <p className="freep">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
          </div>

          <div className="sbenefit3">
            <div className="beneicon1">
              <img src={pic3} alt="icon" />
            </div>
            <div className="bene1text">
              <h2 className="free">Free Forever</h2>
              <p className="freep">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sslc;
