import React from "react";
import { styles } from "./useSsltoolstyles";
import { CheckBoxes } from "../CheckBox/CheckBoxes";
import { data } from "../../../data";
export const SslTool = () => {
  const classes = styles();
  return (
    <div className={classes.toolsMainWrapper}>
      <div className={classes.toolsleftWrapper}>
        <div className={classes.toolsLeftContanier}>
          <div className={classes.tText}>
            <h1 className={classes.toolsTexHead}>{data.ssltool.head}</h1>
            <p className={classes.toolsTexPara}>{data.ssltool.paragraph}</p>
          </div>
          <div className={classes.toolsChecks}>
            <CheckBoxes title={data.ssltool.placeholder1} />
            <CheckBoxes title={data.ssltool.placeholder2} />
            <CheckBoxes title={data.ssltool.placeholder3} />
            <CheckBoxes title={data.ssltool.placeholder4} />
          </div>
        </div>
      </div>
      <img
        className={classes.toolsrightWrapper}
        src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/bigpadlock.svg"
        alt="bigsslpadlock"
      />
    </div>
  );
};
