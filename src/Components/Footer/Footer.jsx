import React from "react";
import { styles } from "./useFooterStyles";
import { FooterCoverage } from "../FooterCoverage/FooterCoverage";
import { FooterMiddle } from "../FooterMiddle/FooterMiddle";
export const Footer = () => {
  const classes = styles();
  return (
    <div className={classes.MainFooterWrapper}>
      <div className={classes.MainFooterUpperContanier}>
        <div className={classes.MainFooterTextContanier}>
          <h1 className={classes.MainFooterTextContanierHead}>
            Trusted Worldwide
          </h1>
          <p className={classes.MainFooterTextContanierPara}>
            Join the list of satisfied users worldwide, from startups to
            multinationals, using Getfreessl to protect their websites and
            customer data.
          </p>
        </div>
        <div className={classes.FooterCoverageWrapper}>
          <FooterCoverage head="40+" graph="Certificates" isborder="true" />
          <FooterCoverage head="90%" graph="Browser coverage" isborder="true" />
          <FooterCoverage head="90+" graph="Global customers" />
        </div>
      </div>

      <FooterMiddle />
    </div>
  );
};
