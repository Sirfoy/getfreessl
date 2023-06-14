import { styles } from "./useHeroVerifyStyles";
import { VerifySection } from "../VerifySection/VerifySection";
import { useState } from "react";
import { data } from "../../../data";
import { NewCertificate } from "../NewCertificate/NewCertificate";
import { stylesVerify } from "../Verification/verificationStyles";
import { VerificationSummary } from "../VerificationSummary/VerificationSummary";
export const HeroVerify = ({ onProceedClick, onRestartClick, onGetClick }) => {
  const classesVerify = stylesVerify();
  const classes = styles();
  const [selected, setselected] = useState(null);
  const toggle = (i) => {
    setselected(i);
  };
  const [change, setchange] = useState(true);
  const handleclick = () => {
    setchange(false);
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
        onClick={() => toggle(selected === 1 ? 0 : 1)}
      >
        <div className={classesVerify.verifyMethod}>
          <img
            className={classesVerify.verifyPic}
            src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step1.svg"
            alt="check"
          />
          <p className={classesVerify.verifyGraph}>
            {data.heroverify.verificationmethod}
          </p>
        </div>
        <div>
          <div className={selected === 1 ? classes.arrowUp : classes.arrowDown}>
            <img
              className={classesVerify.verifyArrowDown}
              src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/arrowdown.png"
              alt="arrow"
            />
          </div>
        </div>
      </div>
      <div style={{ display: selected === 1 ? "block" : "none" }}>
        <div style={{ display: change === true ? "block" : "none" }}>
          <VerifySection
            onProceedClick={handleclick}
            onRestartClick={onRestartClick}
          />
        </div>
        <div style={{ display: change === false ? "block" : "none" }}>
          <VerificationSummary onRestartClick={onRestartClick} />
        </div>
      </div>
      <div className={classes.verificationMainWrapper2}>
        <div
          className={classesVerify.verificationMainWrapper2}
          onClick={() => toggle(selected === 2 ? 0 : 2)}
        >
          <div className={classesVerify.verifyMethod}>
            <img
              className={classesVerify.verifyPic}
              src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step2.svg"
              alt="check"
            />
            <p className={classesVerify.verifyGraph}>Get certificate</p>
          </div>
          <div className={selected === 2 ? classes.arrowUp : classes.arrowDown}>
            <img
              className={classesVerify.verifyArrowDown}
              src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/arrowdown.png"
              alt="arrow"
            />
          </div>
        </div>
        {selected === 2 && <NewCertificate onClick={onGetClick} />}
      </div>
    </div>
  );
};
