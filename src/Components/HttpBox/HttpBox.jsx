import React from "react";
import { styles } from "./useHttpBoxStyles";
export const HttpBox = (props) => {
  const classes = styles();

  return (
    <div className={classes.HttpBoxMainWrapper1}>
      <div
        className={
          props?.isHttpBox ? classes.HttpBoxMethod : classes.HttpBoxMethod2
        }
      >
        <div
          className={
            props?.isHttpTextwrapper
              ? classes.HttpBoxTextWrapper2
              : classes.HttpBoxTextWrapper
          }
        >
          <img className={classes.HttpBoxPic} src={props?.pic} alt="check" />
          <p className={classes.HttpBoxGraph}>{props?.graph}</p>
        </div>

        {props?.showBox && (
          <div
            className={
              props?.isText ? classes.HttpBoxLink1 : classes.HttpBoxLink2
            }
          >
            {props?.src}
          </div>
        )}
      </div>
    </div>
  );
};
