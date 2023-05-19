import React from "react";
import { styles } from "./httpboxStyles";
const Httpbox = (props) => {
  const classes = styles();
  return (
    <div>
      <div className={classes.httpBoxMainWrapper1}>
        <div className={classes.httpBoxMethod}>
          <img className={classes.httpBoxPic} src={props.pic} alt="check"/>
          <p className={classes.httpBoxGraph}>{props.graph}</p>

          <div
            className={
              props.isText ? classes.httpBoxLink1 : classes.httpBoxLink2
            }
          >
            {props.link}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Httpbox;
