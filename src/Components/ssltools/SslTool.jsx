import React from "react";
import { styles } from "./useSslToolStyles";
import { CheckBoxes } from "../CheckBox/CheckBoxes";
export const SslTool = () => {
  const classes = styles();
  return (
    <div className={classes.ToolsMainWrapper}>
      <div className={classes.ToolsleftWrapper}>
        <div className={classes.ToolsLeftContanier}>
          <div className={classes.tText}>
            <h1 className={classes.ToolsTexHead}>
              All the SSL tools you need in one place
            </h1>
            <p className={classes.ToolsTexPara}>
              Access and leverage all the recommended SSL tools. Leave no stones
              unturned in rebuffing cybercriminals.
            </p>
          </div>
          <div className={classes.ToolsChecks}>
            <CheckBoxes title=" Valid for 90 days" />
            <CheckBoxes title=" Installation checks" />
            <CheckBoxes title=" One step validation" />
            <CheckBoxes title=" SSL Rest API " />
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
