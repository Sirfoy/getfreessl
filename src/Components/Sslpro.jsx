import React from "react";
import "../Styles/Sslpro.css";
import Box from "../Components/Box";

const Sslpro = () => {
    return (
        <div className="pmain_wrapper">
            <div className="pinfo">
                <div className="pboxes">
                    <div className="pcard">
                        <Box />
                    </div>
                    <div className="prow">
                        
                    </div>
                </div>
                <div className="pcontent">
                    <div className="ptext">
                        <h1 className="ptext_h1">SSL Protection for Everyone in 3 steps</h1>
                        <p className="ptext_p">
                            Save time and money. Secure your website data with three simple
                            steps; enter a domain, verify domain ownership, submit an email
                            and congratulations! you’re protected.  Your data and your
                            visitors' information is now protected, giving your users a sense
                            of security. You also gain online credibility with HTTPS
                            encryption. It is free, fast and favourable.
                        </p>
                    </div>
                    <div>
                        <button className="pbutton">
                            <span className="pbtn_text">Get Yours Now</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sslpro;
