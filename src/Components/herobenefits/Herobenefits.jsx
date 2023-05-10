import React from 'react'
import { styles } from "./herobenefitsstyle"
const Herobenefits = (props) => {
  const classes = styles();
  return (
    <div className={props.isBorder ? classes.benefits_mainwrapper : classes.benefits_mainwrapper2} >
      <div className={classes.benefitwrapped}>
        <div className={classes.benefits_icon}>
          <img className={classes.benefit_image} src={props.pic} alt="verify" />

        </div>
        <div className={classes.benefits_textwrapper}>
          <h1 className={classes.benefits_header}> {props.title}</h1>
          <p className={classes.benefits_para}>
            {props.graph}
          </p>


        </div>
      </div>
    </div>
  )
}

export default Herobenefits
