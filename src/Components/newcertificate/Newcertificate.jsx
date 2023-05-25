import React from "react";
import { styles } from "./useNewCertificateStyles";

export const NewCertificate = () => {
  const classes = styles();
  return (
    <div className={classes.getCertificateMainWrapper}>
      <div className={classes.getCertificateFrame}>
        <div className={classes.getCertificateFrameWrapper}>
          <img
            className={classes.getCertificateFramePic}
            src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/newtick.svg"
            alt=""
          />
          <p className={classes.getCertificateFrametext}>
            Congratulations!! Your domain has been successfully verified. You a
            just a step away from owning a SSL certificate that will secure your
            website for 90 days . Please enter your email address below to get
            your certificate.
          </p>
        </div>
      </div>
      <div className={classes.getCertificateText}>
        <div className={classes.getCertificateTextHeadWrapper}>
          <div className={classes.getCertificateTextHead}>
            Please enter an email address below
          </div>
          <div className={classes.inputGetCertificateWrapper}>
            <input
              className={classes.inputGetCertificate}
              type="text"
              placeholder="Email address"
            />
          </div>
          <div className={classes.getCertificateButton}>
            <button className={classes.getCertificateBtn}>Submit</button>
          </div>
    
        </div>
      </div>
       
      <div>
      </div>
    </div>
  );
};
