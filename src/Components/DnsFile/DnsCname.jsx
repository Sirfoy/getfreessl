import React from "react";
import { Records } from "../Records/Records";
import { styles } from "./useDnsCnameStyles";
import { HttpBox } from "../HttpBox/HttpBox";
import { Actions } from "../Actions/Actions";
import { data } from "../../../data";
export const DnsCname = ({ onRestartClick, onProceedClick }) => {
  const classes = styles();

  return (
    <div className={classes.dnsMainWrapper}>
      <HttpBox
        isHttpBox={false}
        isHttpTextwrapper={true}
        graph={data.dnscname.placeholder1}
        pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step1.svg"
      />
      <HttpBox
        isHttpBox={false}
        isHttpTextwrapper={true}
        pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step2.svg"
        graph={data.dnscname.placeholder2}
      />
      <HttpBox
        isHttpBox={false}
        isHttpTextwrapper={true}
        pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step3.svg"
        graph={data.dnscname.placeholder3}
      />
      <Records />
      <HttpBox
        isHttpTextwrapper={true}
        isHttpBox={false}
        pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step4.svg"
        graph={data.dnscname.placeholder4}
      />
      <Actions
        text={data.dnscname.actions}
        onRestartClick={onRestartClick}
        onProceedClick={onProceedClick}
      />
    </div>
  );
};
export default DnsCname;
