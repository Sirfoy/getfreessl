import React, { useContext } from "react";
import { data } from "../../../data";
import { styles } from "./useHeroHeadStyle";
import { HeroBtn } from "../HeroButton/HeroBtn";
import { AppContext } from "@/contexts";

export const HeroHead = ({ onHeroClick }) => {
  const { domain, updateAppData } = useContext(AppContext);

  const handleDomainChange = (event) => {
    updateAppData({ domain: event.target.value });
  };

  const classes = styles();
  return (
    <div className={classes.hheadWrapper}>
      <div className={classes.hhead}>
        <h1 className={classes.hheadHead}>
          <span className={classes.hheadHead_h}>
            {data.herohead.heroHeader}
            <br />
            {data.herohead.heroHeader2}
          </span>
        </h1>
        <p className={classes.hheadPara}>
          <span className={classes.hheadParaP}>{data.herohead.hheadParaP}</span>
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
            placeholder={data.herohead.placeholder}
            value={domain}
            onChange={handleDomainChange}
          />
        </div>
        <HeroBtn onClick={onHeroClick} text={data.herohead.herobtn} />
      </div>
    </div>
  );
};
