import React from 'react'
import { styles } from "./heroStyles"
import HeroHead from "../herohead/HeroHead"
import HeroBenefits from "../herobenefits/HeroBenefits"
const Hero = () => {
  const classes = styles();
  return (
    <div className={classes.hero_wrapper}>
      <div className={classes.hupper_wrapper}>
        <HeroHead />
      </div>
      <div className={classes.hlower_wrapper}>
        <HeroBenefits
          isBorder="false"
          pic="/Assets/freeforever.png"
          title="Free forever "
          graph="Lorem ipsum dolor sit amet, consectetur adipis elit.
         Sit enim nec, 
        proin faucibus nibh et sagittis a. Lacinia purus ac amet."
        />
        <HeroBenefits
          isBorder="false"
          pic="/Assets/trustedforever.png"
          title="Trusted, Trusted, Reliable "
          graph="Our SSL certificates guarantee full protection
         for any domain or website. your visitors' information 
         is protected, and secured.
        "
        />
        <HeroBenefits
          className={classes.last_benefit}
          pic="/Assets/perks.png"
          title="SSL perks "
          graph="Enjoy website's credibility and search engine rankings. 
        Improve your chances of being seen by potential customers."
        />
      </div>
    </div>
  );
};
export default Hero;
