import React from "react";
import { styles } from "./useHttpBoxStyles";
export const HttpBox = (props) => {
  const classes = styles();
  return (
    <div>
      <div className={classes.HttpBoxMainWrapper1}>
        <div className={classes.HttpBoxMethod}>
          <img className={classes.HttpBoxPic} src={props.pic} alt="check" />
          <p className={classes.HttpBoxGraph}>{props.graph}</p>

          <div
            className={
              props.isText ? classes.HttpBoxLink1 : classes.HttpBoxLink2
            }
          >
            {props.link}
          </div>
        </div>
      </div>
    </div>
  );
};
