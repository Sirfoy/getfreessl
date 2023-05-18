import React from "react";
import Link from "next/link";
import { styles } from "./restartBtnstyles";

const RestartBtn = ({ onClick }) => {
  const classes = styles();
  return (
    <div>
      <Link rel="stylesheet" href="/">
        <button className={classes.restartBtnWrapper} onClick={onClick}>
          Restart process
        </button>
      </Link>
    </div>
  );
};
export default RestartBtn;
