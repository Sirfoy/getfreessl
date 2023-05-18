import React from "react";
import { styles } from "./HeroLowerStyles";
import HeroBenefits from "../herobenefits/HeroBenefits";
const HeroLowerWrapper = () => {
  const classes = styles();
  return (
    <div className={classes.hlowerMainWrapper}>
      <div className={classes.hlowerWrapper}>
        <HeroBenefits
          isBorder="false"
          pic="/Assets/benefit1.svg"
          title="Free forever "
          graph="Lorem ipsum dolor sit amet, consectetur adipis elit.
     Sit enim nec, 
    proin faucibus nibh et sagittis a. Lacinia purus ac amet."
        />
        <HeroBenefits
          isBorder="false"
          pic="/Assets/benefit2.svg"
          title="Trusted, Trusted, Reliable "
          graph="Our SSL certificates guarantee full protection
     for any domain or website. your visitors' information 
     is protected, and secured.
    "
        />
        <HeroBenefits
          className={classes.lastBenefit}
          pic="/Assets/benefit3.svg"
          title="SSL perks "
          graph="Enjoy website's credibility and search engine rankings. 
    Improve your chances of being seen by potential customers."
        />
      </div>
    </div>
  );
};

export default HeroLowerWrapper;
