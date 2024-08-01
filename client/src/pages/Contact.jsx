import { useState } from "react";
import "../css/index.css";
export const Contact = () => {
    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: "",
    })

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setContact({
            ...contact,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(contact);
        try {
            const response = await fetch("http://localhost:5000/api/form/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });

            if (response.ok) {
                setSuccess("send successful!");
                setError("");
                setContact({ username: "", email: "", message: "" });
            } else {
                const errorData = await response.json();
                setError("Send failed. Please try again.");
                setSuccess("");
            }
        } catch (err) {
            setError("send failed. Please try again.");
            setSuccess("");
            console.error("Send error:", err);
        }
    }
    return (
        <>
            <main>
                <section>

                    <div>
                        <div className="register-main section-hero d-flex justify-content-center">
                            {/* contact page main */}
                            <div className="container row">
                                <div className="home-img container col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6" data-aos="fade-up">
                                    {/* <img
                                    src="./src/pages/web-developer.png"
                                    alt="contact image"
                                    className="container img-fluid"
                                /> */}
                                    <img src="./src/image/main-hero.png" className="img-fluid" alt="Web Developer" />
                                </div>

                                {/* contact from content actual */}

                                <div className="container home-main col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                    <h1 className="hero-heading text-center">Contact us</h1>
                                    <form className="form-submit" onSubmit={handleSubmit}>
                                        <div className="container registration-input">
                                            <label htmlFor="username" className="form-label">Username:</label>
                                            <input
                                                type="text"
                                                name="username"
                                                className="form-control"
                                                id="username"
                                                autoComplete="off"
                                                value={contact.username}
                                                onChange={handleInput}
                                                required
                                            />
                                        </div>

                                        <div className="container registration-input">
                                            <label htmlFor="email" className="form-label">Email:</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                id="email"
                                                autoComplete="off"
                                                value={contact.email}
                                                onChange={handleInput}
                                                required
                                            />
                                        </div>

                                        <div className="container registration-input">
                                            <label htmlFor="message" className="form-label">Massage:</label><br />
                                            <textarea
                                                name="message"
                                                id="message"
                                                className="form-control"
                                                autoComplete="off"
                                                value={contact.message}
                                                onChange={handleInput}
                                                required
                                                cols="30"
                                                rows="6"
                                            ></textarea>
                                        </div>

                                        <div className="container register-extra">
                                            <button type="submit" className="register-btn btn btn-danger my-3">submit</button>
                                        </div>

                                    </form>
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
                    </div>
                </section>
            </main>
        </>

    );
};