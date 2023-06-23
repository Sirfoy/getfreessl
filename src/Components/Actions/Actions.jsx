import React from "react";
import { styles } from "./useActionStyles";
import { ProceedBtn } from "../ProceedBtn/ProceedBtn";

export const Actions = ({ text, onProceedClick }) => {
  const classes = styles();
  return (
    <div className={classes.actionMainWrapper}>
      <div className={classes.actiontextWrapper}>{text}</div>
      <div className={classes.actionsBtnWrapper}>
        <ProceedBtn onClick={onProceedClick} />
      </div>
    </div>
  );
};
