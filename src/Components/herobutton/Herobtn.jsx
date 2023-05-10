import React from 'react'
import { styles } from "./heroBtnStyles"
const HeroBtn = () => {
    const classes = styles();
    return (
        <div>
            <button className={classes.hero_btn}>
                Generate SSL Certificate
            </button>
        </div>
    )
}
export default HeroBtn
