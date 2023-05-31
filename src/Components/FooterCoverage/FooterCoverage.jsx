import React from "react";
import { styles } from "./useFooterCoverageStyles";

export const FooterCoverage = (props) => {
  const classes = styles();
  return (
    <div
      className={
        props.isborder
          ? classes.FooterCoverageMainContanier
          : classes.FooterCoverageMainContanier2
      }
    >
      <div className={classes.FooterCoverageMainContanierWrapper}>
        <h1 className={classes.FooterCoverageMainContanierHead}>
          {props.head}
        </h1>
        <p className={classes.FooterCoverageMainContanierbody}>{props.graph}</p>
      </div>
    </div>
  );
};
