import React from "react";
import { styles } from "./useHeroBtnStyles";
export const HeroBtn = ({ onClick ,text}) => {
  const classes = styles();
  return (
      <button className={classes.HeroBtn} onClick={onClick}>
        {text}
      </button> 
  );
};

