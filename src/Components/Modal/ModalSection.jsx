import React from "react";
import { styles } from "./useModalSectionStyles";
import { ModalMiddle } from "../ModalLower/ModalLower";
import { useRouter } from "next/router";
export const ModalSection = () => {
  const router = useRouter();
  const handleRefreshPage = () => {
    router.reload();
  };
  const classes = styles();
  return (
    <div className={classes.ModalSectionMainContanier}>
      <div className={classes.ModalSectionMainWrapper}>
        <div className={classes.ModalSectionUpper}>
          <div
            className={classes.ModalSectionUpperPic}
            onClick={handleRefreshPage}
          >
            <img
              className={classes.ModalSectionpicClose}
              src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/Close.svg"
              alt="close"
            />
          </div>
        </div>
        <div className={classes.ModalSectionMiddle}>
          <img
            src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/RedMail.svg"
            alt="Big Mail"
          />
          <h1 className={classes.ModalSectionMiddleHead}>Congratulations</h1>
          <p className={classes.ModalSectionMiddlePara}>
            Your 90 days free SSL certificate has been issued and will arrive in
            your email right about now. go to your email account to access the
            link to download and enjoy free, premium security.
          </p>
        </div>
        <div className={classes.ModalSectionLast}>
          <ModalMiddle />
        </div>
      </div>
    </div>
  );
};
