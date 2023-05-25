import React from "react";
import {Records} from "../Records/Records";
import { styles } from "./useDnsCnameStyles";
import { HttpBox } from "../HttpBox/HttpBox";
import { Actions } from "../Actions/Actions";
export const DnsCname = ({ onRestartClick, onProceedClick }) => {
  const classes = styles();
  return (
    <div className={classes.dnsMainWrapper}>
      <HttpBox
        isText={true}
        pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step1.svg"
        graph="Sign In to your DNS provider, typically the registrar of your domain. "
      />
      <HttpBox
        isText={false}
        pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step2.svg"
        graph="Navigate to the section where DNS records are managed. "
      />
      <HttpBox
        isText={true}
        pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step3.svg"
        graph="Add the following CNAME record "
      />
      <Records />
      <HttpBox
        isText={true}
        pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step4.svg"
        graph="Save your CNAME record and click “Proceed” to continue"
      />
      <Actions
        text="How to use DNS verification?"
        onRestartClick={onRestartClick}
        onProceedClick={onProceedClick}
      />
    </div>
  );
};
export default DnsCname;
