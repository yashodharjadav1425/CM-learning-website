import React from "react";
import { useAuth } from "../store/auth";
import "../css/index.css";
import courseImage from '../image/Coding (1).png'; // Adjust the path as needed

export const Service = () => {
    const { services } = useAuth();

    // Log the services to inspect the data
    console.log('Services data:', services);

    if (!Array.isArray(services)) {
        console.error("services is not an array:", services);
        return <p>No services available</p>; // Fallback UI
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    {services.length === 0 ? (
                        <p>No services available</p> // Fallback UI when there are no services
                    ) : (
                        services.map((curElem) => {
                            const { id, service, description, price, provider } = curElem; // Assuming each service has a unique id
                            return (
                                <div key={id} className="card col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div className="card-img">
                                        <img src={courseImage} className="card-img img-fluid" alt="course image" width="200" />
                                    </div>
                                    <div className="container card-details">
                                        {/* <div className="grid grid-two-cols"> */}
                                        <p>{provider}</p>
                                        <p>{price}</p>
                                        {/* </div> */}
                                        <h5>{service}</h5>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </section>
    );
};
