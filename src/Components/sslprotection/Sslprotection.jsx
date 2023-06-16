import React from "react";
import { Boxes } from "../Box/Boxes";
import { styles } from "./useSslProtectonStyles";
import { data } from "../../../data";
export const SslProtection = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const classes = styles();
  return (
    <div className={classes.paragraphmainWrapper}>
      <div className={classes.contentWrapper}>
        <div className={classes.paragraphleftWrapper}>
          <div className={classes.paragraphrow}>
            <Boxes
              title={data.sslprotection.head1}
              graph={data.sslprotection.body1}
              pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/domain.svg"
            />
          </div>
          <div className={classes.paragraphcolumn}>
            <Boxes
              title={data.sslprotection.head2}
              graph={data.sslprotection.body2}
              pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/logo1.png"
            />
            <Boxes
              title={data.sslprotection.head3}
              graph={data.sslprotection.body3}
              pic="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/certified.svg"
            />
          </div>
        </div>
        <div className={classes.paragraphrightWrapper}>
          <div className={classes.paragraphcontent}>
            <h1 className={classes.psslHeader}>
              {data.sslprotection.mainHead}
            </h1>
            <p className={classes.psslP}>{data.sslprotection.mainHeadbody}</p>
            <button className={classes.psslButton} onClick={handleClick}>
              <span className={classes.psslBtnText}>
                {data.sslprotection.sslprobtn}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
