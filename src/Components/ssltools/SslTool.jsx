import React from "react";
import { styles } from "./useSslToolStyles";
import { CheckBoxes } from "../CheckBox/CheckBoxes";
export const SslTool = () => {
  const classes = styles();
  return (
    <div className={classes.tmainWrapper}>
      <div className={classes.tleftWrapper}>
        <div className={classes.tleftContanier}>
          <div className={classes.tText}>
            <h1 className={classes.tTexHead}>
              All the SSL tools you need in one place
            </h1>
            <p className={classes.tTexPara}>
              Access and leverage all the recommended SSL tools. Leave no stones
              unturned in rebuffing cybercriminals.
            </p>
          </div>
          <div className={classes.tChecks}>
            <CheckBoxes title=" Valid for 90 days" />
            <CheckBoxes title=" Valid for 90 days" />
            <CheckBoxes title=" Valid for 90 days" />
            <CheckBoxes title=" Valid for 90 days" />
          </div>
        </div>
      </div>
      <div className={classes.trightWrapper}>
        <img
          src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/bigpadlock.svg"
          alt="getfreessl"
        />
      </div>
    </div>
  );
};
