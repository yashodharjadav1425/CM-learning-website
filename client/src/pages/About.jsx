import { NavLink } from "react-router-dom";
import "../css/index.css";
// import { Analytics } from "../component/Analytics";

export const About = () => {
  return (
    <>
      <main>
        <section className="about-main d-flex justify-content-center">
          <div className="container about-container row">
            <div className="container about-detail col-6">

              <h1 className="about-h1">Why Choose Us? </h1>
              <p className="about-para">
                Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry
                trends.
              </p>
              <p className="about-para">
                Customization: We understand that every business is unique.
                Thats why we create solutions that are tailored to your specific
                needs and goals.
              </p>
              <p className="about-para">
                Customer-Centric Approach: We prioritize your satisfaction and
                provide top-notch support to address your IT concerns.
              </p>
              <p className="about-para">
                Affordability: We offer competitive pricing without compromising
                on the quality of our services.
              </p>
              <p className="about-para">
                Reliability: Count on us to be there when you need us. We're
                committed to ensuring your IT environment is reliable and
                available 24/7.
              </p>
              <div className="container about-btn">
                <NavLink to="/contact">
                  <button className="about-btn-1 btn btn-danger mx-3"> Connect Now</button>
                </NavLink>
                <button className="about-btn-1 btn btn-danger">learn more</button>
              </div>
            </div>
            <div className="container about-image col-6">
              <img
                src=".\src\image\web-developer.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
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
        </section>
      </main>
    </>
  );
};