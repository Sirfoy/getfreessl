import { useContext } from "react";
import { styles } from "./useVerifytickStyles";
import { HttpFile } from "../HttpFile/HttpFile";
import { DnsTxt } from "../DnsFile/DnsTxt";
import { data } from "../../../data";
import { AppContext } from "@/contexts";
import { ProceedBtn } from "../ProceedBtn/ProceedBtn";
import { useCreateTask } from "../../store";

export function VerifyCheck() {
  const { type, task_id, validation, updateAppData } = useContext(AppContext);
  const classes = styles();
  const createTask = useCreateTask();

  const handleTypeChange = (type) => {
    updateAppData({ type });
  };

  return (
    <div className={classes.checkBoxWrapper}>
      <label
        className={classes.checkBoxLabel}
        onChange={() => {
          handleTypeChange(1);
        }}
      >
        <input
          className={classes.checkInput}
          type="radio"
          checked={type === 1}
          onChange={() => {}}
        />
        {data.verifycheck.placeholder1}
      </label>
      {type === 1 && validation?.uuid && <HttpFile />}
      <label
        className={classes.checkBoxLabel}
        onChange={() => {
          handleTypeChange(2);
        }}
      >
        <input
          className={classes.checkInput}
          type="radio"
          checked={type === 2}
          onChange={() => {}}
        />
        <span className={classes.checkedRadioButton} />
        {data.verifycheck.placeholder2}
      </label>
      {type === 2 && validation?.uuid && <DnsTxt />}
      {!task_id && !validation && (
        <div className={classes.requestButtonParent}>
          <ProceedBtn
            text="Request Certificate"
            isDisabled={!Boolean(type)}
            onClick={createTask}
          />
        </div>
      )}
    </div>
  );
}
