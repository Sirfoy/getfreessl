import React from "react";
import { styles } from "./useHeroStyles";
import { HeroHead } from "../HeroHead/HeroHead";
import { useState } from "react";
import { HeroLowerWrapper } from "../heroLower/HeroLowerWrapper";
import { SslTool } from "../SslTools/SslTool";
import { SslProtection } from "../SslProtection/SslProtection";
import { HeroVerify } from "../HeroVerify/HeroVerify";
import { Footer } from "../Footer/Footer";
export const Hero = () => {
  const classes = styles();
  const [changed, setchanged] = useState(true);

  const handleclicked = () => {
    setchanged(!changed);
  };
  return (
    <div>
      <div className={classes.HeroWrapper}>
        <div className={classes.hupperWrapper}>
          <div>
            <HeroHead onHeroClick={handleclicked} />
          </div>
        </div>
        {!changed && <HeroVerify onRestartClick={handleclicked} />}
      </div>
      <div>
        {changed && (
          <>
            <HeroLowerWrapper />
            <SslProtection />
            <SslTool />
          </>
        )}
      </div>
      <Footer/>
    </div>
  );
};
