import React from "react";
import { styles } from "./useFooterStyles";
import { FooterCoverage } from "../FooterCoverage/FooterCoverage";
import { FooterMiddle } from "../FooterMiddle/FooterMiddle";
import { FooterLast } from "../FooterLast/FooterLast";
import { data } from "../../../data";

export const Footer = () => {
  const classes = styles();
  return (
    <div className={classes.MainFooterWrapper}>
      <div className={classes.MainFooterUpperContanier}>
        <div className={classes.MainFooterTextContanier}>
          <h1 className={classes.MainFooterTextContanierHead}>
            {data?.footer?.head}
          </h1>
          <p className={classes.MainFooterTextContanierPara}>
            {data?.footer?.paragraph}
          </p>
        </div>
        <div className={classes.FooterCoverageWrapper}>
          <FooterCoverage
            head={data?.footer?.header1}
            graph={data?.footer?.placeholder1}
            isborder="true"
          />
          <FooterCoverage
            head={data?.footer?.header2}
            graph={data?.footer?.placeholder2}
            isborder="true"
          />
          <FooterCoverage
            head={data?.footer?.header3}
            graph={data?.footer?.placeholder3}
          />
        </div>
      </div>
      <FooterMiddle />
      <FooterLast />
    </div>
  );
};
