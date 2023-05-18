import React from "react";
import { styles } from "./recordStyle";
import RecordBox from "../recordBox/RecordBox";
const Records = () => {
  const classes = styles();
  return (
    <div className={classes.recordMainWrapper}>
      <RecordBox
        title="Name"
        placeholder="585830023030FD48F3DD3FCA57547594940304945757.lizzy.com"
      />
      <RecordBox
        title="Point to"
        placeholder="585830023030FD48F3DD3FCA5754759494030494783249503947
        565840303448577754930029384479291012337447475757gf.gtfssl.com"
      />
      <RecordBox title="TTL" placeholder="3600 ( or lower)" />
    </div>
  );
};

export default Records;
