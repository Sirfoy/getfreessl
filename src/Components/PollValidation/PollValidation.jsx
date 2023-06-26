import { useContext, useState, useEffect } from "react";
import { usePollValidationStyles } from "./styles";
import { AppContext, initialAppData } from "@/contexts";
import { getCountdown } from "@/utilities";
import { useVerifyTask } from "@/store";

export const PollValidation = () => {
  const { task_id, updateAppData } = useContext(AppContext);
  const classes = usePollValidationStyles();
  const countdownExpiry = Date.now() + 3 * 60 * 1000;
  const [countdown, setCountdown] = useState(getCountdown(countdownExpiry));
  const verifyTask = useVerifyTask();

  useEffect(() => {
    pollValidation();
    const countdownInterval = setInterval(() => {
      const countdown = getCountdown(countdownExpiry);
      if (countdown === "00m 00s") {
        window.scrollTo(0, 0);
        updateAppData({
          ...initialAppData,
          error: "Request timed out. Please try again in a few minutes.",
        });
      }
      setCountdown(countdown);
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  const pollValidation = async () => {
    let counter = 0;
    let now = Date.now();
    const pause = async () => {
      await new Promise((res) => setTimeout(res, 5000));
    };
    for (counter = 0; counter < 30; counter++) {
      const validation =
        countdownExpiry - now >= 5000 ? await verifyTask(task_id) : null;
      if (validation)
        return updateAppData({
          validation,
        });
      now = Date.now();
      await pause();
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.pollDialog}>
        <img
          className={classes.pollImage}
          src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/Hello.svg"
          alt="Hello"
        />
        <p className={classes.pollHeading}>Hold On!</p>
        <p className={classes.pollText}>
          Please hold on, we are currently processing a lot of requests. Your
          request has been queued.
        </p>
        <div className={classes.pollCountdown}>
          <p className="countdown">{countdown}</p>
        </div>
      </div>
    </div>
  );
};
