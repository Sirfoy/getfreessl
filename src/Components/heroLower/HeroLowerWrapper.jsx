import { styles } from "./useHeroLowerWrapperStyles";
import { HeroBenefits } from "../HeroBenefits/HeroBenefits";
import { data } from "../../../data";
export const HeroLowerWrapper = () => {
  const classes = styles();
  return (
    <div className={classes.hlowerMainWrapper}>
      <div className={classes.hlowerWrapper}>
        <HeroBenefits
          isBorder="false"
          pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/benefit1.svg"
          title={data.HeroLowerWrapper.title1}
          graph={data.HeroLowerWrapper.placeholder1}
        />
        <HeroBenefits
          isBorder="false"
          pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/benefit2.svg"
          title={data.HeroLowerWrapper.title2}
          graph={data.HeroLowerWrapper.placeholder2}
        />
        <HeroBenefits
          className={classes.lastBenefit}
          pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/benefit3.svg"
          title={data.HeroLowerWrapper.title3}
          graph={data.HeroLowerWrapper.placeholder3}
        />
      </div>
    </div>
  );
};
