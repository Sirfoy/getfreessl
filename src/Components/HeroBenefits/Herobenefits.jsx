import React from "react";
import { styles } from "./useHeroBenefitsStyle";

export const HeroBenefits = (props) => {
  const classes = styles();
  return (
    <div
      className={
        props?.isBorder
          ? classes.benefitsMainWrapper
          : classes.benefitsMainWrapper2
      }
    >
      <img className={classes.benefitImage} src={props?.pic} alt="verify" />
      <div className={classes.benefitsTextWrapper}>
        <h1 className={classes.benefitsHeader}> {props?.title}</h1>
        <p className={classes.benefitsPara}>{props?.graph}</p>
      </div>
    </div>
  );
};
