import React from "react";
import { styles } from "./useHeroBtnStyles";

export const HeroBtn = ({ onClick, text, visibility = true }) => {
  const classes = styles();
  return (
    <button
      className={classes.HeroBtn}
      onClick={onClick}
      style={{ visibility: visibility ? "visible" : "hidden" }}
    >
      {text}
    </button>
  );
};
