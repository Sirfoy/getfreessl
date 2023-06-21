import React from "react";
import { styles } from "./useRecordBoxStyle";
export const RecordBox = (props) => {
  const classes = styles();
  return (
    <div className={classes.recordBoxWrapper}>
      <div className={classes.recordBoxHead}>{props?.title}</div>
      <div className={classes.recordBoxInputWrapper}>
        <input
          className={classes.inputRecordBox}
          type="text"
          placeholder={props?.placeholder}
        />
      </div>
    </div>
  );
};
