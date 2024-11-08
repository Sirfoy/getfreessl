import React from "react";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
import { styles } from "./useNavBarStyles";

export const NavBar = () => {
  const classes = styles();
  return (
    <div className={classes.Navigation}>
      <img
        className={classes.logoNav}
        src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/getfreessllogo.svg"
        alt="logo"
      />
    </div>
  );
};
