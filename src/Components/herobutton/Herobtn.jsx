import React from "react";
import { styles } from "./useHeroBtnStyles";
export const HeroBtn = ({ onClick }) => {
  const classes = styles();
  return (
      <button className={classes.HeroBtn} onClick={onClick}>
        Generate SSL Certificate
      </button> 
  );
};

