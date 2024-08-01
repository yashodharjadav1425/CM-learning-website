import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/index.css";
import { useAuth } from "../store/auth";

export const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                alert("Registration successful!");
                const res_data = await response.json();
                storeTokenInLS(res_data.token);
                setError("");
                setUser({ username: "", email: "", phone: "", password: "" });
                navigate("/login");
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Registration failed. Please try again.");
                setSuccess("");
            }
        } catch (error) {
            console.error("Registration error:", error);
            setError("Registration failed. Please try again.");
            setSuccess("");
        }
    };

    return (
        <section>
            <main>
                <div className="register-main section-hero d-flex justify-content-center">
                    <div className="container row">
                        <div className="home-img container col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <img
                                className="container img-fluid"
                                src="./src/image/image2.png"
                                alt="Registration"
                            />
                        </div>

                        <div className="container home-main col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="container registration-form">
                                <h1 className="container hero-heading text-center">Registration Form</h1>
                                <form className="form-data" onSubmit={handleSubmit}>
                                    <div className="container register-input">
                                        <label htmlFor="username" className="form-label">Username:</label><br />
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            value={user.username}
                                            placeholder="username"
                                            id="username"
                                            required
                                            autoComplete="off"
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div className="container register-input">
                                        <label htmlFor="email" className="form-label">Email:</label><br />
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="email"
                                            id="email"
                                            required
                                            autoComplete="off"
                                            value={user.email}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div className="container register-input">
                                        <label htmlFor="phone" className="form-label">Phone:</label><br />
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="phone"
                                            placeholder="phone"
                                            id="phone"
                                            required
                                            autoComplete="off"
                                            value={user.phone}
                                            onChange={handleInput}


                                        />
                                    </div>
                                    <div className="container register-input">
                                        <label htmlFor="password" className="form-label">Password:</label><br />
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="password"
                                            id="password"
                                            required
                                            autoComplete="off"
                                            value={user.password}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <br />
                                    <div className="container register-extra">
                                        <button type="submit" className="register-btn btn btn-danger">
                                            Register now
                                        </button>
                                        Already registered?<Link to="/Login">Login here</Link>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="container analytics col-12 bg-white">
                            <div className="d-flex justify-content-center">
                                <div className="container analytics-detail row py-4">
                                    <div className="div1 text-center col-6">
                                        <h2>50+</h2>
                                        <p>Registered companies</p>
                                    </div>
                                    <div className="div1 text-center col-6">
                                        <h2>100000+</h2>
                                        <p>Happy clients</p>
                                    </div>
                                    <div className="div1 text-center col-6">
                                        <h2>500+</h2>
                                        <p>Well known developers</p>
                                    </div>
                                    <div className="div1 text-center col-6">
                                        <h2>24?7</h2>
                                        <p>Service</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};
