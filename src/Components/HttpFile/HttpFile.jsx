import React, { useContext, useState, useEffect } from "react";
import { styles } from "./useHttpFileStyles";
import { HttpBox } from "../HttpBox/HttpBox";
import { Actions } from "../Actions/Actions";
import { data } from "../../../data";
import { AppContext, initialAppData } from "@/contexts";
import { useGenerateSsl } from "@/store";
import { getCountdown } from "@/utilities";

export const HttpFile = () => {
  const { domain, type, validation, updateAppData } = useContext(AppContext);
  const countdownExpiry = Date.now() + 5 * 60 * 1000;
  const [countdown, setCountdown] = useState(getCountdown(countdownExpiry));
  const classes = styles();
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
  const downloadAuthLink = () => {
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/text;charset=utf-8," +
        encodeURIComponent(validation?.validation?.value)
    );
    element.setAttribute("download", validation?.validation?.token);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className={classes.httpMainWrapper}>
      <div className={classes.httpTextWrapper}>
        {type === 1 && validation && (
          <>
            <div className={classes.httpTextParent}>
              <p className={classes.httpTextP}>{data.httpfile.head}</p>
              <div className={classes.httpCountdown}>
                <p className="countdown">{countdown}</p>
              </div>
            </div>
            <HttpBox
              isHttpBox={true}
              isText="true"
              pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step1.svg"
              graph={data.httpfile.title1}
              src={
                <div onClick={downloadAuthLink}>{data.httpfile.source1}</div>
              }
              showBox={true}
            />
            <HttpBox
              isHttpBox={true}
              istext="false"
              pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step2.svg"
              graph={data.httpfile.title2}
              src={"/.well-known/acme-challenge"}
              showBox={true}
            />
            <HttpBox
              isHttpBox={true}
              showBox={true}
              isText="true"
              pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step3.svg"
              graph={data.httpfile.title3}
              src={`http://${domain}/.well-known/acme-challenge/${validation?.validation?.token}`}
            />
            <HttpBox
              isHttpBox={true}
              showBox={true}
              isText="true"
              pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/step4.svg"
              graph={data.httpfile.title5}
              src={""}
            />
            <Actions
              src={data.httpfile.actions}
              onRestartClick={() => {}}
              onProceedClick={generateSsl}
            />
          </>
        )}
      </div>
    </div>
  );
};
