import React from "react";
import { styles } from './checkBoxStyles';
const checkBoxes = (props) => {
  const classes = styles();
  return (
    <div className={classes.checkContanier}>
      <div className={classes.tpic}>
        <img src="/assets/check.png" alt="check" />
      </div>
      <div className={classes.tcheckText}>
        <p>{props.title}</p>
      </div>
    </div>
  );
};
export default checkBoxes;
