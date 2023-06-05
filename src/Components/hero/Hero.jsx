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
  const [changed, setchanged] = useState(false);
  const handleclicked = () => {
    setchanged(!changed);
  };
  return (
    <>
      <div className={classes.HeroWrapper}>
        <HeroHead onHeroClick={handleclicked} />
        {changed && (
          <HeroVerify onRestartClick={handleclicked} onGetClick={onGetClick} />
        )}
      </div>
      <div>
        {!changed && (
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
