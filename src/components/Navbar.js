import React, { useState, useEffect } from 'react';
import { NavLink as Link } from 'react-router-dom';

const Sidebar = () => {
    const [isLogedIn, setIsLogedIn] = useState(false);
    const [activeUser, setActiveUser] = useState(null);
    const [jobtitle, setJobtitle] = useState('null');

    // Load session storage data only once when the component mounts
    useEffect(() => {
        const loggedInUser = JSON.parse(sessionStorage.getItem('LoggedIn'));
        setActiveUser(loggedInUser);
        setJobtitle(loggedInUser ? loggedInUser.jobtitle : 'null');
        setIsLogedIn(!!loggedInUser);
    }, []);

    Sidebar.handleLogOut = () => {
        setActiveUser(null);
        sessionStorage.removeItem('LoggedIn');
        sessionStorage.removeItem('expiresAt');
        setIsLogedIn(false);
    };

    Sidebar.activeUser = activeUser;

    return (
        <div className="sidebar">
            <ul>
                <li className="idhom"><img alt="" src={require("../images/home2.png")} ></img><Link to="/">Home</Link></li>
                {!isLogedIn && <li className="idlin"><img alt="" src={require("../images/home.png")} ></img><Link to="/Login">Login</Link></li>}
                {(jobtitle === 'Manager' || jobtitle === 'Tracker') && <li className="idmat"><img alt="" src={require("../images/history.png")} ></img><Link to="/Materials">Material</Link></li>}
                {(jobtitle === 'Manager' || jobtitle === 'Tracker') && <li className="idnew"><img alt="" src={require("../images/materials.png")} ></img><Link to="/NewRecord">New Records</Link></li>}
                {jobtitle === 'Manager' && <li className="idadm"><img alt="" src={require("../images/data.png")} ></img><Link to="/Administrator">Administrator</Link></li>}
                {(jobtitle === 'Manager' || jobtitle === 'Tracker') && <li className="idatt"><img alt="" src={require("../images/attendece.png")} ></img><Link to="/Attendence">Attendence</Link></li>}
                {jobtitle === 'Manager' && <li className="idemp"><img alt="" src={require("../images/data.png")} ></img><Link to="/Employees">Employees</Link></li>}
                {isLogedIn && <li className="idhis"><img alt="" src={require("../images/administrator.png")} ></img><Link to="/History">History</Link></li>}
                <li className="idreg"><img alt="" src={require("../images/attendece.png")} ></img><Link to="/Register">Register</Link></li>
                {isLogedIn && <li className="idout"><img alt="" src={require("../images/logout.png")} ></img><Link to="/Logout">Logout</Link></li>}
            </ul>
        </div>
    );
};

export default Sidebar;
