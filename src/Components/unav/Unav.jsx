import React from "react";
import { styles } from "./useUnavStyles";

export const Unav = () => {
  const classes = styles();
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.ownWrapper}>
        <p className={classes.own}>Own a website for free in 5 Minutes</p>
        <button className={classes.ownButton}>Learn more</button>
      </div>
    </div>
  );
};
