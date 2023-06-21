import React from "react";
import { styles } from "./useVerifySectionStyles";
import { VerifyCheck } from "../VerifyTick/Verifytick";
import { data } from "../../../data";

export const VerifySection = ({ onRestartClick, onProceedClick }) => {
  const classes = styles();
  return (
    <div className={classes.VerifySection}>
      <div className={classes.VerifySectionFrame}>
        <div className={classes.VerifySectionHead}>
          <h1 className={classes.VerifySectionMainText}>
            {data.verifysection.head}
          </h1>
          <p className={classes.VerifySectionParagraph}>
            {data.verifysection.title}
          </p>
        </div>
        <VerifyCheck
          onRestartClick={onRestartClick}
          onProceedClick={onProceedClick}
        />
      </div>
    </div>
  );
};
