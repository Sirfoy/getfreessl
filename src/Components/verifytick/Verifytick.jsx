import { useState } from "react";
import { styles } from "./useVerifytickStyles";
import { HttpFile } from "../HttpFile/HttpFile";
import { DnsCname } from "../DnsFile/DnsCname.jsx";
export function VerifyCheck({ onRestartClick, onProceedClick }) {
  const classes = styles();
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  function handleCheckbox1Change() {
    setIsChecked1(!isChecked1);
    setIsChecked2(false);
  }
  function handleCheckbox2Change() {
    setIsChecked2(!isChecked2);
    setIsChecked1(false);
  }
  const [selected, setselected] = useState(null);
  const toggle = (i) => {
    setselected(i);
  };
  return (
    <div className={classes.checkBoxWrapper}>
      <label
        className={classes.checkBoxLabel}
        onClick={() => toggle(selected === 1 ? 0 : 1)}
      >
        <input
          className={classes.checkInput}
          type="radio"
          checked={isChecked1}
          onChange={handleCheckbox1Change}
        />
        HTTP file upload
      </label>
      {selected === 1 && (
        <HttpFile
          onRestartClick={onRestartClick}
          onProceedClick={onProceedClick}
        />
      )}
    
      <label
        className={classes.checkBoxLabel}
        onClick={() => toggle(selected === 2 ? 0 : 2)}
      >
        <input
          className={classes.checkInput}
          type="radio"
          checked={isChecked2}
          onChange={handleCheckbox2Change}
        />
        <span className={classes.checkedRadioButton} />
        DNS (CNAME)
      </label>
      {selected === 2 && (
        <DnsCname
          onRestartClick={onRestartClick}
          onProceedClick={onProceedClick}
        />
      )}
    </div>
  );
}
