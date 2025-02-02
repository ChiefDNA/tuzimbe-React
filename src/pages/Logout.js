import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = ({ data, onFetch }) => {
    const navigate = useNavigate();
    useEffect(() => {
        onFetch();
        const logoutUser = () =>{
            try {
                axios.post('http://localhost:8000/api/logout/', data)
                sessionStorage.removeItem('LoggedIn');
                sessionStorage.removeItem('expiresAt');
            
                alert("Logout Successful! Redirecting to Home...");
                navigate('/');
            } catch (error){
                console.error("logout failed")
                alert("You haven't logged into the system")
            }
        };
        logoutUser();
    }, [data, navigate, onFetch]);

    return null;
};

export default Logout;
