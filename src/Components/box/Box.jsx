import React from 'react'
import {styles} from "./Boxstyles"


const Boxes = (props) => {
  const classes = styles ();
  return (
    <div className={classes.box}>
      <div className={classes.info}>
        <div className={classes.icon}>
         
            <img className={classes.pimage} src={props.pic} alt="verify" />
         
          
        </div>

        <div className={classes.content}>
          <h1 className={classes.verify_owner}> {props.title}</h1>
          <p className={classes.verify_para}>
            {props.graph}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Boxes;