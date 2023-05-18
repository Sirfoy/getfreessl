import React from 'react'
import { styles } from './sslToolStyles';
import CheckBoxes from "../checkBox/CheckBoxes"
const Ssltool = () => {
    const classes = styles();
    return (
        <div className={classes.tmainWrapper}>
            <div className={classes.tleftWrapper}>
                <div className={classes.tleftContanier}>
                    <div className={classes.tText}>
                        <h1 className={classes.tTexHead}>
                            All the SSL tools you need in one place
                        </h1>

                        <p className={classes.tTexPara} >
                            Access and leverage all the recommended SSL tools.
                            Leave no stones unturned in rebuffing cybercriminals.
                        </p>

                    </div>



                    <div className={classes.tChecks}>

                        <CheckBoxes
                            title=" Valid for 90 days" />

                        <CheckBoxes
                            title=" Valid for 90 days" />
                        <CheckBoxes
                            title=" Valid for 90 days" />
                        <CheckBoxes
                            title=" Valid for 90 days" />


                        
                    </div>




                </div>
            </div>
            <div className={classes.trightWrapper}>

            </div>
        </div>
    )
}

export default Ssltool
