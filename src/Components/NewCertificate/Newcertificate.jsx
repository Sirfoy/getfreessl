import React, { useContext } from "react";
import { styles } from "./useNewCertificateStyles";
import { data } from "../../../data";
import { AppContext } from "@/contexts";
import { useMailSsl } from "@/store";
import { Spinner } from "../Spinner";

export const NewCertificate = () => {
  const classes = styles();
  const { email, loading, validation, updateAppData } = useContext(AppContext);
  const mailSsl = useMailSsl();

  const handleEmailChange = (event) => {
    updateAppData({ email: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    mailSsl();
  };

  return (
    <div className={classes.getCertificateMainWrapper}>
      <div className={classes.getCertificateFrameWrapper}>
        <img
          className={classes.getCertificateFramePic}
          src="https://sytbuildr.s3.eu-west-2.amazonaws.com/gfssl/assets/newtick.svg"
          alt=""
        />
        <p className={classes.getCertificateFrametext}>
          {data.newcertificate.head}
        </p>
      </div>
      <div className={classes.getCertificateText}>
        <div className={classes.getCertificateTextHead}>
          {data.newcertificate.paragraph}
        </div>
        <form
          className={classes.inputGetCertificateWrapper}
          onSubmit={handleSubmit}
        >
          <input
            className={classes.inputGetCertificate}
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder={data.newcertificate.placeholder}
            disabled={Boolean(validation?.is_mailed)}
            required
          />
          <div className={classes.getCertificateButton}>
            <button type="submit" className={classes.getCertificateBtn}>
              {data.newcertificate.certificatebtn} {loading && <Spinner />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
