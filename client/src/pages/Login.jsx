import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios';
import "../css/index.css";
import { useAuth } from "../store/auth";

export const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                alert("Login successful!");
                const res_data = await response.json();
                storeTokenInLS(res_data.token);
                setError("");
                setUser({ email: "", password: "" });
                navigate("/");
            } else {
                const errorData = await response.json();
                setError("Login failed. Please try again.");
                setSuccess("");
            }
        } catch (err) {
            setError("Login failed. Please try again.");
            setSuccess("");
            console.error("Login error:", err);
        }
    };

    return (
        <section>
            <main>
                <div className="register-main section-hero d-flex justify-content-center">
                    <div className="container row">
                        <div className="home-img container col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <img
                                src=".\src\image\image2.png"
                                alt="login image"
                                className="container image-fluid"
                            />
                        </div>
                        <div className="container home-main col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="container registration-form">
                                <h1 className="container hero-heading text-center">Login Form</h1>
                                <form className="form-data" onSubmit={handleSubmit}>
                                    
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
                                    
                                    <div className="container register-extra py-3">
                                        <button type="submit" className="register-btn btn btn-danger">
                                            Login now
                                        </button>
                                        Already logged in?<Link to="/Register">Register here</Link>
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
                <br />
                {/* <div className="custom-shape-divider-bottom-1696162272">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".2"
                            class="shape-fill"
                        ></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5"
                            class="shape-fill"
                        ></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            class="shape-fill"
                        ></path>
                    </svg> */}
                {/* </div> */}
                
            </main>
        </section>
    );
};
