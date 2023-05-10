import React from 'react'
import { styles } from "./heroHeadStyle"
import HeroBtn from "../herobutton/HeroBtn"
const HeroHead = () => {
    const classes = styles();
    return (
        <div className={classes.hhead_wrapper}>
            <div className={classes.hhead}>
                <h1 className={classes.hhead_head}>
                    <span className={classes.hhead_head_h}> Get free SSL certificate,<br /> valid for 90 days.</span>
                </h1>
                <p className={classes.hhead_para}>
                    <span className={classes.hhead_para_p}>
                        Get a headstart for three months of free certification.
                        You can get your website up and running and serve clients without
                        worries about cyber threats and data theft.
                    </span>
                </p>
            </div>
            <div className={classes.hsearch}>
                <div className={classes.hinput}>
                    <div className={classes.hinput_pic}>
                        <img src="/assets/https.svg" alt="https" />
                    </div>
                    <div className={classes.hinput_input_field}>
                        <input
                            className={classes.hinput_text}
                            type="text"
                            placeholder="Enter Primary Domain" />
                    </div>
                </div>
                <div className={classes.hbutton}>
                    <HeroBtn />
                </div>
            </div>
        </div>
    )
}
export default HeroHead
