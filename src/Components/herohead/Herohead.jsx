import React from "react";
import { styles } from "./useHeroHeadStyle";
import { HeroBtn } from "../HeroButton/HeroBtn";
export const HeroHead = ({ onHeroClick }) => {
  const classes = styles();
  return (
    <div className={classes.hheadWrapper}>
      <div className={classes.hhead}>
        <h1 className={classes.hheadHead}>
          <span className={classes.hheadHead_h}>
            Get free SSL certificate,
            <br /> valid for 90 days.
          </span>
        </h1>
        <p className={classes.hheadPara}>
          <span className={classes.hheadParaP}>
            Get a headstart for three months of free certification. You can get
            your website up and running and serve clients without worries about
            cyber threats and data theft.
          </span>
        </p>
      </div>
      <div className={classes.hsearch}>
        <div className={classes.hinput}>
          <img
            src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/https.svg"
            alt="https"
          />

          <input
            className={classes.hinputText}
            type="text"
            placeholder="Enter Primary Domain"
          />
        </div>
        <HeroBtn onClick={onHeroClick} text="Generate SSL Certificate" />
      </div>
    </div>
  );
};
