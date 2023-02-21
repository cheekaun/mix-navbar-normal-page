import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
// import Css from '../pages/Css'
// import Angular from '../pages/Angular'
import List from "../pages/List";
import History from "../pages/History";
import StationInfo from "../pages/StationInfo"


const Navbar = () => {
    return(
        <React.Fragment>
            <section>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/list" element={<List />} />
                    {/* <Route path="/history" element={<History />} /> */}
                    <Route path="/history" element={<StationInfo />} />
                    
                </Routes>
            </section>
        </React.Fragment>
        
    );
}

export default Navbar