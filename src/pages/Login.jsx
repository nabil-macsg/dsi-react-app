import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/scss/auth.scss";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    };

    return (
        <div className="dsi-login-page">
            <div className="login-card">
                <div className="login-logo">DSI</div>

                <h1>DSI PBL Platform</h1>
                <p>Tool Management System</p>

                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter email address" defaultValue="admin@dsi.com" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter password" defaultValue="password" />
                    </div>

                    <button type="submit" className="login-btn">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;