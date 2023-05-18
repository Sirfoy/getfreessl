import React from "react";
import { styles } from "./heroStyles";
import HeroHead from "../herohead/HeroHead";
import HeroBenefits from "../herobenefits/HeroBenefits";
import HeroVerify from "../heroVerifyDomain/HeroVerify";
import { useState } from "react";
import HeroLowerWrapper from "../heroLower/HeroLowerWrapper";
import SslTool from "../ssltools/SslTool";
import Sslprotection from "../sslprotection/SslProtection";

const Hero = ({ onRestartClick, onHeroClick }) => {
  const classes = styles();
  const [changed, setchanged] = useState(true);

  const handleclicked = () => {
    setchanged(!changed);
  };
  return (
    <div>
      <div className={classes.heroWrapper}>
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
            <Sslprotection />
            <SslTool />
          </>
        )}
      </div>
    </div>
  );
};
export default Hero;
