import React from "react";
import Link from "next/link";
import { styles } from "./useRestartBtnstyles";

export const RestartBtn = ({ onClick }) => {
  const classes = styles();
  return (
    <>
      <Link rel="stylesheet" href="/">
        <button className={classes.restartBtnWrapper} onClick={onClick}>
          Restart process
        </button>
      </Link>
    </>
  );
};
 
