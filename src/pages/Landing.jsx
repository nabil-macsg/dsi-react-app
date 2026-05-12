import React from "react";
import "../assets/scss/auth.scss";

import macsgLogo from "../assets/images/macsg-logo.png";
import aegisLogo from "../assets/images/aegis-logo.png";

const Landing = () => {
    const openAegis = () => {
        window.location.href =
            "https://globalaegis.macs-g.com/AegisDSI/Views/Login.aspx?ReturnUrl=%2fAegisDSI";
    };

    const openDsi = () => {
        window.location.href = "/dsi-login";
    };

    return (
        <div className="platform-landing">
            <div className="landing-content">

                <div className="landing-header">

                    <div className="brand-row">

                        <img
                            src={macsgLogo}
                            alt="MACSG"
                            className="macsg-main-logo"
                        />

                        <div className="landing-logo">
                            DSI
                        </div>

                    </div>

                    <h1>Choose Your Workspace</h1>

                    <p>
                        Access MACS-G enterprise applications from one secure gateway
                    </p>

                </div>

                <div className="platform-grid">

                    <div className="platform-card">
                        <div className="platform-top">
                            <img
                                src={aegisLogo}
                                alt="Aegis"
                                className="platform-logo"
                            />
                        </div>

                        <h2>Aegis Platform</h2>

                        <p>
                            Access enterprise HSE, risk, audit, PTW, training and operational workflows.
                        </p>

                        <button onClick={openAegis}>
                            Continue to Aegis
                        </button>
                    </div>

                    <div className="platform-card">
                        <div className="platform-top">
                            <div className="platform-icon dsi">
                                DSI
                            </div>
                        </div>

                        <h2>DSI PBL Platform</h2>

                        <p>
                            Access tool repository, maintenance, movements and lifecycle management.
                        </p>

                        <button onClick={openDsi}>
                            Continue to DSI Platform
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Landing;