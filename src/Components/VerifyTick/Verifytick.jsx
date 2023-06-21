import { useState, useContext } from "react";
import { styles } from "./useVerifytickStyles";
import { HttpFile } from "../HttpFile/HttpFile";
import { DnsCname } from "../DnsFile/DnsCname.jsx";
import { data } from "../../../data";
import { AppContext } from "@/contexts";
import { ProceedBtn } from "../ProceedBtn/ProceedBtn";
import { useCreateTask } from "../../store";

export function VerifyCheck({ onRestartClick, onProceedClick }) {
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
        />
        {data.verifycheck.placeholder1}
      </label>
      {type === 1 && validation && (
        <HttpFile
          onRestartClick={onRestartClick}
          onProceedClick={onProceedClick}
        />
      )}

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
        />
        <span className={classes.checkedRadioButton} />
        {data.verifycheck.placeholder2}
      </label>
      {type === 2 && validation && (
        <DnsCname
          onRestartClick={onRestartClick}
          onProceedClick={onProceedClick}
        />
      )}

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
