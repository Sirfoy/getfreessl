import React from "react";
import { styles } from "./unavStyles.js";
const Unav = () => {
  const classes = styles();
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.ownWrapper}>
        <p className={classes.own}>Own a website for free in 5 Minutes</p>
        <button className={classes.ownButton}>
          <span className={classes.ownText}> Learn More</span>
        </button>
      </div>
    </div>
  );
};

export default Unav;
