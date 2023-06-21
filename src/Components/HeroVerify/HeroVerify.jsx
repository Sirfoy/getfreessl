import { useState, useContext } from "react";
import { styles } from "./useHeroVerifyStyles";
import { VerifySection } from "../VerifySection/VerifySection";
import { data } from "../../../data";
import { NewCertificate } from "../NewCertificate/NewCertificate";
import { stylesVerify } from "../Verification/verificationStyles";
import { VerificationSummary } from "../VerificationSummary/VerificationSummary";
import { AppContext } from "@/contexts";
import { VerifyCheck } from "../VerifyTick/Verifytick";

export const HeroVerify = () => {
  const { step, type, validation, updateAppData } = useContext(AppContext);
  const [showContent, setShowContent] = useState(true);
  const classesVerify = stylesVerify();
  const classes = styles();

  const handleStepChange = (newStep) => {
    if (newStep === 2 && (!type || !validation?.is_cert_generated)) return;

    updateAppData({ step: newStep });

    if (step === newStep) setShowContent(!showContent);
    else setShowContent(true);
  };

  return (
    <div className={classes.HVerifyMainWrapper}>
      <div className={classes.verifyHeader}>
        <h1 className={classes.verifyTitle}>{data.heroverify.title}</h1>
        <button className={classes.verifyButton}>
          <span className={classes.verifyButonText}>
            {data.heroverify.title}
          </span>
        </button>
      </div>
      <div className={classes.thankYouWrapper}>
        <p className={classes.thankYouPara}>{data.heroverify.thankyoupara}</p>
      </div>
      <div
        className={classesVerify.verificationMainWrapper1}
        onClick={() => handleStepChange(1)}
      >
        <div className={classesVerify.verifyMethod}>
          <img
            className={classesVerify.verifyPic}
            src={
              validation?.is_cert_generated
                ? ""
                : "https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step1.svg"
            }
            alt="check"
          />
          <p className={classesVerify.verifyGraph}>
            {data.heroverify.verificationmethod}
          </p>
        </div>
        <div>
          <div className={step === 1 ? classes.arrowUp : classes.arrowDown}>
            <img
              className={classesVerify.verifyArrowDown}
              src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/arrowdown.png"
              alt="arrow"
            />
          </div>
        </div>
      </div>
      {step === 1 && showContent && (
        <div>
          {validation?.is_cert_generated ? (
            <VerificationSummary />
          ) : (
            <VerifyCheck />
          )}
        </div>
      )}
      <div className={classes.verificationMainWrapper2}>
        <div
          className={classesVerify.verificationMainWrapper2}
          onClick={() => handleStepChange(2)}
        >
          <div
            className={`${classesVerify.verifyMethod} ${
              !(type && validation) && classesVerify.verifyInactive
            }`}
          >
            <img
              className={classesVerify.verifyPic}
              src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step2.svg"
              alt="check"
            />
            <p className={classesVerify.verifyGraph}>Get certificate</p>
          </div>
          <div className={step === 2 ? classes.arrowUp : classes.arrowDown}>
            <img
              className={classesVerify.verifyArrowDown}
              src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/arrowdown.png"
              alt="arrow"
            />
          </div>
        </div>
        {step === 2 && showContent && <NewCertificate />}
      </div>
    </div>
  );
};
