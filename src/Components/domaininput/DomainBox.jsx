import React from "react";
import { styles } from "./useDomainBoxStyles";
export const DomainBox = (props) => {
  const classes = styles();
  return (
    <div className={classes.domainBoxWrapper}>
      <p className={classes.domainBoxParagraph}>{props?.Domain}</p>
      <div className={classes.domainBoxWrapperframe}>
        {/* <div className={classes.domainBoxWrapperframePic}> */}
          <img src={props?.pic} alt="img" />
       
        <input
          className={classes.domainBoxWrapperBox}
          type="text"
          placeholder={props?.placeholder}
        />
      </div>
    </div>
  );
};
