import React from 'react'
import Box from "../Components/Box";
const Sslprotection = () => {
  return (
    <div>
      <div className="pmain_wrapper">
        <div className="content_wrapper">
          <div className="pleft_wrapper">
            <div className="prow">
              <Box
                className="pbox1"
                pic={"/Assets/domain.svg"}
                title="Enter domain"
                graph="To begin your short but valuable journey to protection, input your domain name in the box provided, and follow the instructions to proceed."
              />
            </div>
            
            <div className="pcolumn">
              <Box
                className="pbox2"
                pic={"/Assets/logo1.png"}
                title="Verify domain ownership "
                graph=" Check any of the three options to choose a verification method and confirm ownership of your domain. This could be via email, HTTPS file upload, or DNS(CNAME). "
              />
              <Box
                className="pbox3"
                pic={"/Assets/certified.svg"}
                title="Certificate issued "
                graph=" Congratulations, you’ve verified your domain, and your certificate will be sent to you immediately. Input your preferred email address to receive it instantly. That’s all, Yaaaaay!!."
              />
            </div>
          </div>
          <div className="pright_wrapper">
            <div className="pcontent">
              <h1 className="pssl_header">
                SSL Protection for everyone in 3 steps
              </h1>

              <p className="pssl_p">
                Save time and money, secure your website data with three simple
                steps; enter a domain, verify domain ownership, submit an email
                and congratulations! you’re protected.  Your data and your
                visitors' information will be protected, giving your users a
                sense of security. You also gain an online credibility with
                HTTPS encryption. It is free, fast and favourable.
              </p>
              <button className="pssl_button">
                <span className="pssl_btn_text"> Get yours now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sslprotection