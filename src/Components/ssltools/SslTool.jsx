import React from "react";
import { styles } from "./useSslToolStyles";
import { CheckBoxes } from "../CheckBox/CheckBoxes";
import { data } from "../../../data";
export const SslTool = () => {
  const classes = styles();
  return (
    <div className={classes.ToolsMainWrapper}>
      <div className={classes.ToolsleftWrapper}>
        <div className={classes.ToolsLeftContanier}>
          <div className={classes.tText}>
            <h1 className={classes.ToolsTexHead}>{data.ssltool.head}</h1>
            <p className={classes.ToolsTexPara}>{data.ssltool.paragraph}</p>
          </div>
          <div className={classes.ToolsChecks}>            
            <CheckBoxes title={data.ssltool.placeholder1} />
            <CheckBoxes title={data.ssltool.placeholder2} />
            <CheckBoxes title={data.ssltool.placeholder3} />
            <CheckBoxes title={data.ssltool.placeholder4} />
          </div>
        </div>
      </div>
      <div className={classes.ToolsrightWrapper}>
        <img
          src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/bigpadlock.svg"
          alt="getfreessl"
        />
      </div>
    </div>
  );
};
