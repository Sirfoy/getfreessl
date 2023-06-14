import React from "react";
import { styles } from "./useActionStyles";
import { RestartBtn } from "../RestartBtn/RestartBtn";
import { ProceedBtn } from "../ProceedBtn/ProceedBtn";
export const Actions = ({ text, onRestartClick, onProceedClick }) => {
  const classes = styles();
  return (
      <div className={classes.actionMainWrapper}>
        <div className={classes.actiontextWrapper}>
         {text}
        </div>
        <div className={classes.actionsBtnWrapper}>
          <RestartBtn onClick={onRestartClick} />
          <ProceedBtn onClick={onProceedClick} />
        </div>
      </div>
  );
};
