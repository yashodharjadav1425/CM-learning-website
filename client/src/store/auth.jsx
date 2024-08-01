  import { createContext, useContext, useEffect, useState } from "react";

  export const AuthContext = createContext();

  // eslint-disable-next-line react/prop-types
  export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [services, setServices] = useState([]);

    // Function to store the token in local storage
    const storeTokenInLS = (serverToken) => {
      return localStorage.setItem("token", serverToken);
    };

    // Check whether the user is logged in
    let isLoggedIn = !!token;
    console.log("token", token);
    console.log("isLoggedIn", isLoggedIn);

    // Function to log out the user
    const logoutUser = () => {
      setToken("");
      return localStorage.removeItem("token");
    };

    // Function to fetch services from the database
    const getServiceData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/data/service`, {
          method: 'GET',
        });
    
        if (response.ok) {
          const result = await response.json();
          console.log('Fetched Data:', result);
    
          // Ensure result.data is an array before setting it
          if (Array.isArray(result.data)) {
            setServices(result.data);
          } else {
            console.error('Fetched data is not an array:', result.data);
            setServices([]); // Default to an empty array if result.data is not an array
          }
        } else {
          console.error('Response not ok:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
        setServices([]); // Default to an empty array on error
      }
    };

    
    
    useEffect(() => {
      getServiceData();
    }, []);

    return (
      <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, logoutUser, services }}>
        {children}
      </AuthContext.Provider>
    );
  }

  export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContextValue;
  };
