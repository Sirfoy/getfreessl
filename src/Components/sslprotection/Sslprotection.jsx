import React from "react";
import Box from "../box/Box";
import { styles } from "./sslProtectonStyles.js";

const Sslprotection = () => {
  const classes = styles();
  return (
    <div className={classes.pmainWrapper}>
      <div className={classes.contentWrapper}>
        <div className={classes.pleftWrapper}>
          <div className={classes.prow}>
            <Box
              pic="/Assets/domain.svg"
              title="Enter domain"
              graph="To begin your short but valuable journey to protection, input your domain name in the box provided, and follow the instructions to proceed."
            />
          </div>
          <div className={classes.pcolumn}>
            <Box
              pic="/Assets/logo1.png"
              title="Verify domain ownership "
              graph=" Check any of the three options to choose a verification method and confirm ownership of your domain. This could be via email, HTTPS file upload, or DNS(CNAME). "
            />
            <Box
              pic="/Assets/certified.svg"
              title="Certificate issued "
              graph=" Congratulations, you’ve verified your domain, and your certificate will be sent to you immediately. Input your preferred email address to receive it instantly. That’s all, Yaaaaay!!."
            />
          </div>
        </div>
        <div className={classes.prightWrapper}>
          <div className={classes.pcontent}>
            <h1 className={classes.psslHeader}>
              SSL Protection for everyone in 3 steps
            </h1>
            <p className={classes.psslP}>
              Save time and money, secure your website data with three simple
              steps; enter a domain, verify domain ownership, submit an email
              and congratulations! you’re protected.  Your data and your
              visitors' information will be protected, giving your users a sense
              of security. You also gain an online credibility with HTTPS
              encryption. It is free, fast and favourable.
            </p>
            <button className={classes.psslButton}>
              <span className={classes.psslBtnText}> Get yours now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sslprotection;
