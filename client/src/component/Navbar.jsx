import { NavLink } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../css/index.css";
import { useAuth } from "../store/auth";

export const Navbar = () => {
    const { isLoggedIn } = useAuth();
    console.log("login or not ", isLoggedIn);

    return (
        // <header className="section-navbar">
        //     <div className="container">
        //         <div class="navbar-brand">
        //             <NavLink className="navbar-brand" to="/About">CM Learning</NavLink>
        //         </div>
        //         <nav className="navbar">
                    
        //             <div>
        //                 <ul>
        //                     <li className="nav-item">
        //                         <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        //                     </li>
        //                     <li className="nav-item">
        //                         <NavLink className="nav-link" aria-current="page" to="/About">About</NavLink>
        //                     </li>
        //                     <li className="nav-item">
        //                         <NavLink className="nav-link" aria-current="page" to="/Contact">Contact</NavLink>
        //                     </li>
        //                     <li className="nav-item">
        //                         <NavLink className="nav-link" aria-current="page" to="/Service">Service</NavLink>
        //                     </li>
        //                     {isLoggedIn ? (
        //                         <li className="nav-item">
        //                             <NavLink className="nav-link" aria-current="page" to="/Logout">Logout</NavLink>
        //                         </li>
        //                     ) : (
        //                         <>
        //                             <li className="nav-item">
        //                                 <NavLink className="nav-link" aria-current="page" to="/Register">Register</NavLink>
        //                             </li>
        //                             <li className="nav-item">
        //                                 <NavLink className="nav-link" aria-current="page" to="/Login">Login</NavLink>
        //                             </li>
        //                         </>
        //                     )}
        //                 </ul>
        //             </div>
        //         </nav>
        //     </div>
        // </header>
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <NavLink className="navbar-brand" to="/About">CM Learning</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="section-navbar collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/About">About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/Contact">Contact</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/Service">Service</NavLink>
                            </li>

                            {isLoggedIn ? (
                                 <li className="nav-item">
                                     <NavLink className="nav-link" aria-current="page" to="/Logout">Logout</NavLink>
                                 </li>
                             ) : (
                                 <>
                                     <li className="nav-item">
                                         <NavLink className="nav-link" aria-current="page" to="/Register">Register</NavLink>
                                     </li>
                                     <li className="nav-item">
                                         <NavLink className="nav-link" aria-current="page" to="/Login">Login</NavLink>
                                     </li>
                                 </>
                             )}

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
