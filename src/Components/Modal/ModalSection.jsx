import React from "react";
import { styles } from "./useModalSectionStyles";
import { ModalMiddle } from "../ModalLower/ModalLower";
import { useRouter } from "next/router";
import { data } from "../../../data";

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
            className={classes.ModalSectionMiddleimg}
            src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/RedMail.svg"
            alt="Big Mail"
          />
          <h1 className={classes.ModalSectionMiddleHead}>
            {data.modalsection.head}
          </h1>
          <p className={classes.ModalSectionMiddlePara}>
            {data.modalsection.paragraph}
          </p>
        </div>
        <div className={classes.ModalSectionLast}>
          <ModalMiddle />
        </div>
      </div>
    </div>
  );
};
