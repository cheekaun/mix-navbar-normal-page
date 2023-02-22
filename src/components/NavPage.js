import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
// import Css from '../pages/Css'
// import Angular from '../pages/Angular'
import List from "../pages/List";
import History from "../pages/History";
import StationInfo from "../pages/StationInfo"
import UserVerifyHistory from "../pages/UserVerifyHistory"


const Navbar = () => {
    return(
        <React.Fragment>
            <section>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/home/UserVerifyHistory" element={<UserVerifyHistory/>} />
                    <Route path="/list" element={<List />} />
                    <Route path="/list/history" element={<StationInfo />} />
                    <Route path="/history" element={<History />} />
                    
                    
                </Routes>
            </section>
        </React.Fragment>
        
    );
}

export default Navbar