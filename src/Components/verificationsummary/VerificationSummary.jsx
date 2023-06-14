import React from "react";
import { styles } from "./useVerificationSummaryStyles";
import { DomainBox } from "../DomainInput/DomainBox";
import { RestartBtn } from "../RestartBtn/RestartBtn";
import { data } from "../../../data";
export const VerificationSummary = ({ onRestartClick }) => {
  const classes = styles();
  return (
    <div className={classes.verificationSummaryWrapper}>
      <div className={classes.verificationSummary}>
        <div className={classes.verificationSummaryText}>
          {data.verificationsummary.head}
        </div>
        <div className={classes.VerificationSummaryBoxWrapper}>
          <DomainBox
            inputfield={true}
            pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/domain1.svg"
            placeholder={data.verificationsummary.placeholder1}
            Domain={data.verificationsummary.domain1}
          />
          <DomainBox
            inputfield={true}
            pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/domain2.svg"
            placeholder={data.verificationsummary.placeholder2}
            Domain={data.verificationsummary.domain2}
          />
          <DomainBox
            inputfield={false}
            pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/domain3.svg"
            placeholder={data.verificationsummary.placeholder3}
            Domain={data.verificationsummary.domain3}
          />
        </div>
        <div className={classes.VerificationSummaryMainTextWrapper}>
          <p className={classes.VerificationSummaryParagraph}>
          {data.verificationsummary.paragraph}
          </p>

          <div className={classes.VerificationSummaryBtnWrapper}>
            <RestartBtn onClick={onRestartClick} />
          </div>
        </div>
      </div>
    </div>
  );
};
