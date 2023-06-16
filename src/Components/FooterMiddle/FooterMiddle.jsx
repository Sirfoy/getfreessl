import React from "react";
import { styles } from "./useFooterMiddleStyles";
import { data } from "../../../data";

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
              {data?.footermiddle?.head}
            </p>
            <h1 className={classes.FooterMiddleTextHead}>
              {data?.footermiddle?.paragraph}
            </h1>
          </div>
          <div className={classes.FooterMiddleButtonsContanier}>
            <button className={classes.startBuilding}>
              {data?.footermiddle?.button1}
            </button>
            <button className={classes.explore}>
              {data?.footermiddle?.button2}
            </button>
          </div>
        </div>
        <img
          className={classes.FooterMiddleright}
          src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/114.svg"
          alt="icon"
        />
      </div>
    </div>
  );
};
