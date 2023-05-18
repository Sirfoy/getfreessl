import React from 'react'
import { styles } from "./actionStyles"
import RestartBtn from "../restartprocess/RestartBtn"
import ProceedBtn from "../proceedbtn/Proceedbtn"
const Actions = ({ text, onRestartClick, onProceedClick }) => {
    const classes = styles();
    return (
        <div>
            <div className={classes.actionMainWrapper}>
                <div className={classes.actiontextWrapper}>
                    <p className={classes.actionTextParagraph}>
                        {text}
                    </p>
                </div>
                <div className={classes.actionsBtnWrapper}>
                    <RestartBtn onClick={onRestartClick} />
                    <ProceedBtn onClick={onProceedClick} />
                </div>
            </div>
        </div>
    )
}

export default Actions
