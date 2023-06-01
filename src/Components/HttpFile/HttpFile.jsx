import React from "react";
import { styles } from "./useHttpFileStyles";
import { HttpBox } from "../HttpBox/HttpBox";
import { Actions } from "../Actions/Actions";
export const HttpFile = ({ onRestartClick, onProceedClick }) => {
  const classes = styles();
  return (
    <div className={classes.httpMainWrapper}>
      <div className={classes.httpTextWrapper}>
        <p className={classes.httpTextP}>
          Please follow the steps below to verify your domain using HTTP file
          upload.
        </p>
        <HttpBox
          isText="true"
          pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step1.svg"
          graph="Download your auth file using the following link: "
          src="Download auth file"
          showBox={true}
        />
        <HttpBox
          istext="false"
          pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step2.svg"
          graph="Upload the Auth file toyour HTTP server under "
          src="/.well-known/pki-validation/"
          showBox={true}
        />
        <HttpBox
        showBox={true}
          isText="true"
          isSpace="true"
          pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step3.svg"
          graph="Make sure your file is available under the following link: "
          src="http://www.lizzy.com/.well-known/pki-validation/FD48F3DD3FCA57D6769E1C3565C955D1.txt"
        />
        <HttpBox
        showBox={true}
          isText="true"
          
          pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step4.svg"
          graph="Make sure your file is also available under the following link: "
          src="http://www.lizzy.com/.well-known/pki-validation/FD48F3DD3FCA57D6769E1C3565C955D1.txt"
        />
        <HttpBox
        showBox={true}
          isText="true"
         
          pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step4.svg"
          graph="Click “Proceed” to continue"
          src="http://www.lizzy.com/.well-known/pki-validation/FD48F3DD3FCA57D6769E1C3565C955D1.txt"
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
