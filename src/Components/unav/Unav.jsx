import React from "react";
import {styles} from "./Unavstyles";


const Unav = () => {
  const classes = styles();
  return (
    <div className={classes.main_wrapper}>
      <div className={classes.own_wrapper}>
        <p className={classes.own}>Own a website for free in 5 Minutes</p>
        <button className={classes.own_button}>
          <span className={classes.own_text}> Learn More</span>
        </button>
      </div>
    </div>
  );
};

export default Unav

