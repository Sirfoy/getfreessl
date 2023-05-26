import React from "react";
import { styles } from './useCheckBoxesStyles';
export const CheckBoxes = ({title}) => {
  const classes = styles();
  return (
    <div className={classes.checkContanier}>
      <div className={classes.checkPic}>
        <img src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/checkcheck.svg" alt="check" />
      </div>
      <div className={classes.tcheckText}>
        {title}
      </div>
    </div>
  );
};

