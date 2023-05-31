import React from "react";
import { styles } from "./useFooterCoverageStyles";

export const FooterCoverage = (props) => {
  const classes = styles();
  return (
    <div
      className={
        props.isborder
          ? classes.FooterCoverageMainContainer
          : classes.FooterCoverageMainContainer2
      }
    >
      <div className={classes.FooterCoverageMainContainerWrapper}>
        <h1 className={classes.FooterCoverageMainContainerHead}>
          {props.head}
        </h1>
        <p className={classes.FooterCoverageMainContainerbody}>{props.graph}</p>
      </div>
    </div>
  );
};
