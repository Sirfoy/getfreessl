import React from "react";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
 const styles = createUseStyles({
  main_wrapper:{
     width: '100%',
    height: 69,
    backgroundColor: 'black',

  }

 });

const Unav = () => {
  const classes = styles();
  return (
    <div className={classes.main_wrapper}>
      <div className="own_wrapper">
        <p className="own">Own a website for free in 5 Minutes</p>
        <button className="own_button">
          <span className="btn_text"> Learn More</span>
        </button>
      </div>
    </div>
  );
};

export default Unav;
