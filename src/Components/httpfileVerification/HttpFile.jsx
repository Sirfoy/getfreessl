import React from "react";
import { styles } from "./httpfileStyles";
import Httpbox from "../httpFile/Httpbox";
import Actions from "../actions/Actions";
const HttpFile = ({ onRestartClick, onProceedClick }) => {
  const classes = styles();
  return (
    <div className={classes.httpMainWrapper}>
      <div className={classes.httpTextWrapper}>
        <p className={classes.httpTextP}>
          Please follow the steps below to verify your domain using HTTP file
          upload.
        </p>
        <Httpbox
          isText="true"
          pic="/Assets/step1.svg"
          graph="Download your auth file using the following link: "
          link="Download auth file"
        />
        <Httpbox
          istext="false"
          pic="/Assets/step2.svg"
          graph="Upload the Auth file toyour HTTP server under "
          link="/.well-known/pki-validation/"
        />
        <Httpbox
          isText="true"
          pic="/Assets/step3.svg"
          graph="Make sure your file is available under the following link: "
          link="http://www.lizzy.com/.well-known/pki-validation/FD48F3DD3FCA57D6769E1C3565C955D1.txt"
        />
        <Httpbox
          isText="true"
          pic="/Assets/step4.svg"
          graph="Make sure your file is also available under the following link: "
          link="http://www.lizzy.com/.well-known/pki-validation/FD48F3DD3FCA57D6769E1C3565C955D1.txt"
        />
        <Httpbox
          isText="true"
          pic="/Assets/step4.svg"
          graph="Click “Proceed” to continue"
          link="http://www.lizzy.com/.well-known/pki-validation/FD48F3DD3FCA57D6769E1C3565C955D1.txt"
        />
        <Actions
          text="How to use HTTP file upload verification?"
          onRestartClick={onRestartClick}
          onProceedClick={onProceedClick}
        />
      </div>
    </div>
  );
};

export default HttpFile;
