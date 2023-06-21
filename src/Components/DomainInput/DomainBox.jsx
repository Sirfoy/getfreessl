import React from "react";
import { styles } from "./useDomainBoxStyles";
export const DomainBox = (props) => {
  const classes = styles();
  return (
    <div className={classes.domainBoxWrapper}>
      <p className={classes.domainBoxParagraph}>{props?.label}</p>
      <div className={classes.domainBoxWrapperframe}>
        <img src={props?.pic} alt="img" />
        <input
          className={classes.domainBoxWrapperBox}
          type="text"
          placeholder={props?.placeholder}
          disabled={true}
          value={props?.value}
        />
      </div>
    </div>
  );
};
