import React from "react";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
import { styles } from "./navigationStyles.js";
const Navbar = () => {
  const classes = styles();
  return (
    <div className={classes.Navigation}>
      <div className={classes.logoNav}>
        <img src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/getfreessllogo.svg" alt="logo" />
      </div>
    </div>
  );
};
export default Navbar;
