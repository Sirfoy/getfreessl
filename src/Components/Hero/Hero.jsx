import React from "react";
import { styles } from "./useHeroStyles";
import { HeroHead } from "../HeroHead/HeroHead";
import { useState } from "react";
import { HeroLowerWrapper } from "../heroLower/HeroLowerWrapper";
import { SslTool } from "../SslTools/SslTool";
import { SslProtection } from "../SslProtection/SslProtection";
import { HeroVerify } from "../HeroVerify/HeroVerify";

export const Hero = ({ onGetClick }) => {
  const classes = styles();
  const [isVerify, setIsVerify] = useState(false);
  const handleclicked = () => {
    if (isVerify) return;
    setIsVerify(!isVerify);
  };
  return (
    <>
      <div className={classes.HeroWrapper}>
        <HeroHead onHeroClick={handleclicked} isVerify={isVerify} />
        {isVerify && (
          <HeroVerify onRestartClick={handleclicked} onGetClick={onGetClick} />
        )}
      </div>
      <div>
        {!isVerify && (
          <>
            <HeroLowerWrapper />
            <SslProtection />
            <SslTool />
          </>
        )}
      </div>
    </>
  );
};
