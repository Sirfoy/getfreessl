import React from "react";
import { styles } from "./useFooterMiddleStyles";

export const FooterMiddle = () => {
  const classes = styles();
  return (
    <div className={classes.FooterMiddleMainWrapper}>
      <div className={classes.FooterMiddleContanier}>
        <div className={classes.FooterMiddleleft}>
          <div className={classes.FooterMiddleTextWrapper}>
            <img
              src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/bbb/footer1.svg"
              alt="square"
              className={classes.FooterMiddleicon1}
            />
            <img
              src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/bbb/footer2.svg"
              alt="diamond"
              className={classes.FooterMiddleicon2}
            />
            <img
              src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/bbb/footer3.svg"
              alt="rect"
              className={classes.FooterMiddleicon3}
            />
            <p className={classes.FooterMiddleTextPara}>
              Do you need a website?
            </p>
            <h1 className={classes.FooterMiddleTextHead}>
              Own a website for free in 5 minutes without any hassle.
            </h1>
          </div>
          <div className={classes.FooterMiddleButtonsContanier}>
            <button className={classes.startBuilding}>
              Start building for free
            </button>
            <button className={classes.explore}>Expore templates</button>
          </div>
        </div>
        <img
          className={classes.FooterMiddleright}
          src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/114.svg"
          alt="yess"
        />
      </div>
    </div>
  );
};
