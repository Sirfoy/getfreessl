import React from "react";
import { styles } from "./useUnavStyles";
import { data } from "../../../data";

export const Unav = () => {
  const classes = styles();
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.ownWrapper}>
        <p className={classes.own}>{data.unav.own}</p>
        <button className={classes.ownButton}>{data.unav.btn}</button>
      </div>
    </div>
  );
};
