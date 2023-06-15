import React from "react";
import { styles } from "./useModalLowerStyles";
import { data } from "../../../data";

export const ModalMiddle = () => {
  const classes = styles();
  return (
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
          <p className={classes.ModalMiddleTextPara}>{data.modallower.head}</p>
          <h1 className={classes.ModalMiddleTextHead}>
            {data.modallower.paragraph}
          </h1>
        </div>
        <div className={classes.ModalMiddleButtonsContanier}>
          <button className={classes.startBuilding}>
            {data.modallower.button2}
          </button>
          <button className={classes.explore}>{data.modallower.button1}</button>
        </div>
      </div>
      <img
        className={classes.ModalMiddleright}
        src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/modalpicture.svg"
        alt="modal"
      />
    </div>
  );
};
