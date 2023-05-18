import React from "react";
import { styles } from "./heroHeadStyle";
import HeroBtn from "../herobutton/HeroBtn";
const HeroHead = ({ onHeroClick }) => {
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
                    <div className={classes.hinputPic}>
                        <img src="/assets/https.svg" alt="https" />
                    </div>
                    <div className={classes.hinputInputField}>
                        <input
                            className={classes.hinputText}
                            type="text"
                            placeholder="Enter Primary Domain"
                        />
                    </div>
                </div>
                <div className={classes.hbutton}>
                    <HeroBtn onClick={onHeroClick} />
                </div>
            </div>
        </div>
    );
};
export default HeroHead;
