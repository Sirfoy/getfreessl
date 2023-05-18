import React from "react";
import { styles } from "./VerifySectionStyles";
import VerifyCheck from "../verifytick/Verifytick";

const VerifySection = ({ onRestartClick, onProceedClick }) => {
  const classes = styles();
  return (
    <div className={classes.VerifySection}>
      <div className={classes.VerifySectionFrame}>
        <div className={classes.VerifySectionHead}>
          <h1 className={classes.VerifySectionMainText}>
            Verification methods
          </h1>

          <p className={classes.VerifySectionParagraph}>
            We need you to verifiy ownership of the domain you provided, please
            choose a preferred verification method and click “Proceed”
          </p>
        </div>

        <div>
          <VerifyCheck
            onRestartClick={onRestartClick}
            onProceedClick={onProceedClick}
          />
        </div>
      </div>
    </div>
  );
};

export default VerifySection;
