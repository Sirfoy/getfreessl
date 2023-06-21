import React, { useContext } from "react";
import { styles } from "./useProceedBtnStyles";
import { Spinner } from "../Spinner";
import { AppContext } from "@/contexts";

export const ProceedBtn = ({ onClick, text, isDisabled = false }) => {
  const { loading } = useContext(AppContext);
  const classes = styles();

  return (
    <button
      className={classes.proceedBtnWrapper}
      onClick={onClick}
      disabled={isDisabled}
      style={{ cursor: isDisabled ? "not-allowed" : "pointer" }}
    >
      {text ?? "Proceed"} {loading && <Spinner />}
    </button>
  );
};
