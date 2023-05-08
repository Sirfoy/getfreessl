import React from "react";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
import {styles} from './Navigationstyles.js';

const Navbar = () => {
  const classes = styles(); 
  return (
    <div className={classes.Navigation}>
      <div className={classes.logo_nav}>
        <img src="/Assets/getfreessllogo.svg" alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;
