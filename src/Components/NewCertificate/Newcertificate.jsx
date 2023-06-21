import React from "react";
import { styles } from "./useNewCertificateStyles";
import { data } from "../../../data";
export const NewCertificate = ({ onClick }) => {
  const classes = styles();
  return (
    <div className={classes.getCertificateMainWrapper}>
      <div className={classes.getCertificateFrameWrapper}>
        <img
          className={classes.getCertificateFramePic}
          src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/newtick.svg"
          alt=""
        />
        <p className={classes.getCertificateFrametext}>
          {data.newcertificate.head}
        </p>
      </div>
      <div className={classes.getCertificateText}>
        <div className={classes.getCertificateTextHead}>
          {data.newcertificate.paragraph}
        </div>
        <div className={classes.inputGetCertificateWrapper}>
          <input
            className={classes.inputGetCertificate}
            type="text"
            placeholder={data.newcertificate.placeholder}
          />
        </div>
        <div className={classes.getCertificateButton}>
          <button className={classes.getCertificateBtn} onClick={onClick}>
            {data.newcertificate.certificatebtn}
          </button>
        </div>
      </div>
    </div>
  );
};
