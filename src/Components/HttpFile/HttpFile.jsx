import React from "react";
import { styles } from "./useHttpFileStyles";
import { HttpBox } from "../HttpBox/HttpBox";
import { Actions } from "../Actions/Actions";
import { data } from "../../../data";
export const HttpFile = ({ onRestartClick, onProceedClick }) => {
  const classes = styles();
  return (
    <div className={classes.httpMainWrapper}>
      <div className={classes.httpTextWrapper}>
        <p className={classes.httpTextP}>{data.httpfile.head}</p>
        <HttpBox
          isHttpBox={true}
          isText="true"
          pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step1.svg"
          graph={data.httpfile.title1}
          src={data.httpfile.source1}
          showBox={true}
        />
        <HttpBox
          isHttpBox={true}
          istext="false"
          pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step2.svg"
          graph={data.httpfile.title2}
          src={data.httpfile.source2}
          showBox={true}
        />
        <HttpBox
          isHttpBox={true}
          showBox={true}
          isText="true"
          pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step3.svg"
          graph={data.httpfile.title3}
          src={data.httpfile.source3}
        />
        <HttpBox
          isHttpBox={true}
          showBox={true}
          isText="true"
          pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step4.svg"
          graph={data.httpfile.title4}
          src={data.httpfile.source4}
        />
        <HttpBox
          isHttpBox={true}
          showBox={true}
          isText="true"
          pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step4.svg"
           graph={data.httpfile.title5}
          src={data.httpfile.source5}
        />
        <Actions
           src={data.httpfile.actions}
           onRestartClick={onRestartClick}
          onProceedClick={onProceedClick}
        />
      </div>
    </div>
  );
};
