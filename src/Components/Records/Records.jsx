import React, { useContext } from "react";
import { styles } from "./useRecordStyle";
import { RecordBox } from "../RecordBox/RecordBox";
import { AppContext } from "@/contexts";

export const Records = () => {
  const { domain, validation } = useContext(AppContext);
  const classes = styles();

  return (
    <div className={classes.recordMainWrapper}>
      <RecordBox title="Name" placeholder="" value={`_acme-challenge`} />
      <RecordBox
        title="Value"
        placeholder=""
        value={`${validation?.validation?.value}`}
      />
      <RecordBox title="TTL" placeholder="" value="30 seconds" />
    </div>
  );
};
