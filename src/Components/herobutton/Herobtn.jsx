import React from "react";
import { styles } from "./heroBtnStyles";
const HeroBtn = ({ onClick }) => {
  const classes = styles();
  return (
    <div>
      <button className={classes.heroBtn} onClick={onClick}>
        Generate SSL Certificate
      </button>
    </div>
  );
};
export default HeroBtn;
