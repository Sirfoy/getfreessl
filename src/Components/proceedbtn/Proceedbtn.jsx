import React from "react";
import { styles } from "./useProceedBtnStyles"
export const ProceedBtn = ({ onClick }) => {
  const classes = styles();
  return (
    <>
      <button className={classes.proceedBtnWrapper} onClick={onClick}>
        Proceed
      </button>
    </>
  );
};
  
