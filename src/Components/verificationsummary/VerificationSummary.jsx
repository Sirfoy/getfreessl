import React from "react";
import { styles } from "./useVerificationSummaryStyles";
import { DomainBox } from "../DomainInput/DomainBox";
import { RestartBtn } from "../RestartBtn/RestartBtn";
export const VerificationSummary = ({ onRestartClick }) => {
  const classes = styles();
  return (
    <div className={classes.verificationSummaryWrapper}>
      <div className={classes.verificationSummary}>
        <div className={classes.verificationSummaryText}>
          Verification summary
        </div>
        <div className={classes.VerificationSummaryBoxWrapper}>
          <DomainBox
            inputfield={true}
            pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/domain1.svg"
            placeholder="www.lizzy.com"
            Domain="Domain"
          />
          <DomainBox
            inputfield={true}
            pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/domain2.svg"
            placeholder="Email"
            Domain="Verification method"
          />
          <DomainBox
            inputfield={false}
            pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/domain3.svg"
            placeholder="pending"
            Domain="Verification status"
          />
        </div>
        <div className={classes.VerificationSummaryMainTextWrapper}>
          <p className={classes.VerificationSummaryParagraph}>
            Once your verification has been approved. you can proceed by
            clicking “Get certificate” below
          </p>

          <div className={classes.VerificationSummaryBtnWrapper}>
            <RestartBtn onClick={onRestartClick} />
          </div>
        </div>
      </div>
    </div>
  );
};
