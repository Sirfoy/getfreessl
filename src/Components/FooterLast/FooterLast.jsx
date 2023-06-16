import React from "react";
import { styles } from "./useFooterLastStyles";
import { data } from "../../../data";

export const FooterLast = () => {
  const classes = styles();
  return (
    <div className={classes.FooterLastMainWrapper}>
      <div className={classes.FooterLastLeftSection}>
        <img
          className={classes.Footercopyright}
          src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/copyright.svg"
          alt="social media"
        />
        <p className={classes.FooterLastLeftcopyright}>
          {data.footerlast.head}
        </p>
      </div>
      <div className={classes.FooterLastRightSection}>
        <div>
          <img
            src=" https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/socialmedia/Twitter.svg"
            alt="social Media"
          />
        </div>
        <div>
          <img
            src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/socialmedia/Facebook.svg "
            alt="social Media"
          />
        </div>
        <div>
          <img
            src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/socialmedia/Instagram.svg "
            alt="social Media"
          />
        </div>
        <img
          src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/socialmedia/Youtube.svg "
          alt="social Media"
        />
        <div>
          <img
            src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/socialmedia/Whatsapp.svg "
            alt="social Media"
          />
        </div>
      </div>
    </div>
  );
};
