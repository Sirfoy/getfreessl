import React, { useContext, useState } from "react";
import { data } from "../../../data";
import { styles } from "./useHeroHeadStyle";
import { HeroBtn } from "../HeroButton/HeroBtn";
import { AppContext } from "@/contexts";

export const HeroHead = ({ onHeroClick }) => {
  const { domain, type, updateAppData, email, validation } =
    useContext(AppContext);
  const [isError, setIsError] = useState(false);

  const handleDomainChange = (event) => {
    updateAppData({ domain: event.target.value });
  };

  const handleButtonClick = () => {
    let newDomain = domain;
    newDomain = domain.replace(/www./g, "");
    updateAppData({ domain: newDomain });

    if (
      !/^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(
        newDomain
      )
    )
      return setIsError(true);

    setIsError(false);
    onHeroClick();
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
        {!type && (
          <HeroBtn onClick={handleButtonClick} text={data.herohead.herobtn} />
        )}
      </div>
      {isError && (
        <div className={classes.hheadError}>
          The specified domain name is not valid
        </div>
      )}
      {validation?.is_mailed && (
        <div className={classes.hheadError}>
          SSL certificate generated successfully and mailed to {email}
        </div>
      )}
    </div>
  );
};
