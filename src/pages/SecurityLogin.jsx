import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/scss/auth.scss";

const SecurityLogin = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/pm");
    };

    return (
        <div className="security-login-page">
            <div className="login-card security-login-card">
                <div className="security-login-logo">
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

                <h1>Safety Culture</h1>
                <p>Safety Operations Management System</p>

                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter email address"
                            defaultValue="admin@safety.com"
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            defaultValue="password"
                        />
                    </div>

                    <button type="submit" className="login-btn security-login-btn">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SecurityLogin;