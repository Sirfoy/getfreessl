import React from "react";
import { styles } from "./useModalSectionStyles";

export const ModalSection = () => {
  const classes = styles();
  return (
    <div className={classes.ModalSectionMainWrapper}>
      <div className={classes.ModalSectionUpper}>
        <div className={classes.ModalSectionUpperPic}>
          <img
            className={classes.ModalSectionpicClose}
            src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/Close.svg"
            alt="close"
          />
        </div>
      </div>
      <div className={classes.ModalSectionmiddle}>
        <img
          src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/RedMail.svg"
          alt="Big Mail"
        />
        <h1 className={classes.ModalSectionmiddleHead}>Congratulations</h1>
        <p className={classes.ModalSectionmiddlePara}>
          Your 90 days free SSL certificate has been issued and will arrive in
          your email right about now. go to your email account to access the
          link to download and enjoy free, premium security.
        </p>
      </div>
      yayygrghegpgpfvpegotrpo,r
    </div>
  );
};
