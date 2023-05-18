import React from 'react'
import Records from "../records/Records"
import { styles } from "./dnsCnameStyles"
import Httpbox from "../httpFile/Httpbox"
import Actions from "../actions/Actions"
const DnsCname = ({ onRestartClick, onProceedClick }) => {
    const classes = styles();
    return (
        <div className={classes.dnsMainWrapper}>
            <Httpbox
                isText="true"
                pic='/Assets/step1.svg'
                graph="Sign In to your DNS provider, typically the registrar of your domain. "
            />
            <Httpbox
                isText="true"
                pic='/Assets/step2.svg'
                graph="Navigate to the section where DNS records are managed. "
            />
            <Httpbox
                isText="true"
                pic='/Assets/step3.svg'
                graph="Add the following CNAME record "
            />
            <Records />
            <Httpbox
                isText="true"
                pic='/Assets/step4.svg'
                graph="Save your CNAME record and click “Proceed” to continue"
            />
            <Actions
                text="How to use DNS verification?"
                onRestartClick={onRestartClick}
                onProceedClick={onProceedClick}
            />
        </div>
    )
}
export default DnsCname
