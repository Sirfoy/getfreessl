import React, { useContext, useState, useEffect } from "react";
import { Records } from "../Records/Records";
import { styles } from "./useDnsTxtStyles";
import { HttpBox } from "../HttpBox/HttpBox";
import { Actions } from "../Actions/Actions";
import { data } from "../../../data";
import { useGenerateSsl } from "@/store";
import { AppContext, initialAppData } from "@/contexts";
import { getCountdown } from "@/utilities";

export const DnsTxt = () => {
  const { updateAppData } = useContext(AppContext);
  const classes = styles();
  const countdownExpiry = Date.now() + 5 * 60 * 1000;
  const [countdown, setCountdown] = useState(getCountdown(countdownExpiry));
  const generateSsl = useGenerateSsl();

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const countdown = getCountdown(countdownExpiry);
      if (countdown === "00m 00s") {
        window.scrollTo(0, 0);
        updateAppData({
          ...initialAppData,
          error: "Domain verification failed",
        });
      }
      setCountdown(countdown);
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <div className={classes.dnsMainWrapper}>
      <div className={classes.dnsTextParent}>
        <p className={classes.dnsTextP}>
          Please follow the steps below to verify your via DNS within the next 5
          minutes.
        </p>
        <div className={classes.dnsCountdown}>
          <p className="countdown">{countdown}</p>
        </div>
      </div>
      <HttpBox
        isHttpBox={false}
        isdnsTextwrapper={true}
        graph={data.dnstxt.placeholder1}
        pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step1.svg"
      />
      <HttpBox
        isHttpBox={false}
        isdnsTextwrapper={true}
        pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step2.svg"
        graph={data.dnstxt.placeholder2}
      />
      <HttpBox
        isHttpBox={false}
        isdnsTextwrapper={true}
        pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step3.svg"
        graph={data.dnstxt.placeholder3}
      />
      <Records />
      <HttpBox
        isdnsTextwrapper={true}
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
