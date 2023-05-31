import React from "react";
import { styles } from "./useModalLowerStyles";

export const ModalMiddle = () => {
  const classes = styles();
  return (
    <div className={classes.ModalMiddleMainWrapper}>
      <div className={classes.ModalMiddleContanier}>
        <div className={classes.ModalMiddleleft}>
          <div className={classes.ModalMiddleTextWrapper}>
            <img
              src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/bbb/footer1.svg"
              alt="square"
              className={classes.ModalMiddleicon1}
            />
            <img
              src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/bbb/footer2.svg"
              alt="diamond"
              className={classes.ModalMiddleicon2}
            />
            <img
              src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/bbb/footer3.svg"
              alt="rect"
              className={classes.ModalMiddleicon3}
            />
            <p className={classes.ModalMiddleTextPara}>
              Do you need a website?
            </p>
            <h1 className={classes.ModalMiddleTextHead}>
              Own a website for free in 5 minutes without any hassle.
            </h1>
          </div>
          <div className={classes.ModalMiddleButtonsContanier}>
            <button className={classes.startBuilding}>
              Start building for free
            </button>
            <button className={classes.explore}>Expore templates</button>
          </div>
        </div>
        <div className={classes.ModalMiddleright}>
          <img
            src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/modalpicture.svg"
            alt="modal"
          />
        </div>
      </div>
    </div>
  );
};
