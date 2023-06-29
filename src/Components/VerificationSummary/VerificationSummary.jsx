import React, { useContext } from "react";
import { styles } from "./useVerificationSummaryStyles";
import { DomainBox } from "../DomainInput/DomainBox";
import { data } from "../../../data";
import { AppContext } from "@/contexts";

export const VerificationSummary = () => {
  const { domain, type, validation } = useContext(AppContext);
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
            label="Domain"
            value={"Domain"}
          />
          <DomainBox
            inputfield={true}
            pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/domain2.svg"
            label="Verification Method"
            value={type === 1 ? "HTTP File Upload" : "DNS"}
          />
          <DomainBox
            inputfield={false}
            pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/verified.svg"
            placeholder={data.verificationsummary.placeholder3}
            label="Verification Status"
          />
        </div>
        <div className={classes.VerificationSummaryMainTextWrapper}>
          <p className={classes.VerificationSummaryParagraph}>
            {data.verificationsummary.paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};
