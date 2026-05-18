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

    const openSecurity = () => {
        window.location.href = "/security-login";
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

                    {/* AEGIS */}
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

                        <button className="aegis-btn" onClick={openAegis}>
                            Continue to Aegis
                        </button>
                    </div>

                    {/* DSI */}
                    <div className="platform-card">
                        <div className="platform-top">
                            <div className="platform-icon dsi">
                                DSI
                            </div>
                        </div>

                        <h2>DSI Asset Management</h2>

                        <p>
                            Access tool repository, maintenance, movements and lifecycle management.
                        </p>

                        <button onClick={openDsi}>
                            Continue to Asset Management
                        </button>
                    </div>

                    {/* SECURITY */}
                    <div className="platform-card">
                        <div className="platform-top">
                            <div className="platform-icon security">
                                <svg
                                    width="42"
                                    height="42"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 2L4 5V11C4 16.55 7.84 21.74 12 23C16.16 21.74 20 16.55 20 11V5L12 2Z"
                                        fill="currentColor"
                                        opacity="0.18"
                                    />
                                    <path
                                        d="M12 2L4 5V11C4 16.55 7.84 21.74 12 23C16.16 21.74 20 16.55 20 11V5L12 2Z"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M9 12L11 14L15 10"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>

                        <h2>Safety Culture</h2>

                        <p>
                            Access safety operations, visitor management, incident monitoring and compliance workflows.
                        </p>

                        <button
                            className="security-btn"
                            onClick={openSecurity}
                        >
                            Continue to Safety Culture
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Landing;