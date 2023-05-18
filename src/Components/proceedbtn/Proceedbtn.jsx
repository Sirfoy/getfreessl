import React from "react";
import { styles } from "./proceedBtnStyles.js";
const Proceedbtn = ({ onClick }) => {
  const classes = styles();
  return (
    <div>
      <button className={classes.proceedBtnWrapper} onClick={onClick}>
        Proceed
      </button>
    </div>
  );
};
export default Proceedbtn;
