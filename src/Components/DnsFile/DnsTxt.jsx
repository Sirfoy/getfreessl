import React from "react";
import { Records } from "../Records/Records";
import { styles } from "./useDnsTxtStyles";
import { HttpBox } from "../HttpBox/HttpBox";
import { Actions } from "../Actions/Actions";
import { data } from "../../../data";
import { useGenerateSsl } from "@/store";

export const DnsTxt = () => {
  const classes = styles();
  const generateSsl = useGenerateSsl();

  return (
    <div className={classes.dnsMainWrapper}>
      <HttpBox
        isHttpBox={false}
        isHttpTextwrapper={true}
        graph={data.dnstxt.placeholder1}
        pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step1.svg"
      />
      <HttpBox
        isHttpBox={false}
        isHttpTextwrapper={true}
        pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step2.svg"
        graph={data.dnstxt.placeholder2}
      />
      <HttpBox
        isHttpBox={false}
        isHttpTextwrapper={true}
        pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step3.svg"
        graph={data.dnstxt.placeholder3}
      />
      <Records />
      <HttpBox
        isHttpTextwrapper={true}
        isHttpBox={false}
        pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step4.svg"
        graph={data.dnstxt.placeholder4}
      />
      <Actions
        text={data.dnstxt.actions}
        onRestartClick={() => {}}
        onProceedClick={generateSsl}
      />
    </div>
  );
};
export default DnsTxt;
