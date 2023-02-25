import React from "react";
import { Routes, Route ,Navigate} from "react-router-dom";
import Home from '../pages/Home'
// import Css from '../pages/Css'
// import Angular from '../pages/Angular'
import List from "../pages/List";
import History from "../pages/History";
import StationInfo from "../pages/StationInfo"
import UserVerifyHistory from "../pages/UserVerifyHistory"
import UseHistory from "../pages/UseHistory";


const Navbar = () => {
    return(
        <React.Fragment>
            <section>
                <Routes>
                    <Route exact path="/" element={<Navigate to="/home" />}/>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/home/UserVerifyHistory" element={<UserVerifyHistory/>} />
                    <Route path="/list" element={<List />} />
                    <Route path="/list/StationInfo/:userid/:stationID" element={<StationInfo />} />
                    {/* <Route path="/history" element={<History />} /> */}
                    <Route path="/history" element={<UseHistory />} />
                    <Route path="/history/UseHistory" element={<UseHistory />} />
                </Routes>
            </section>
        </React.Fragment>
        
    );
}

export default Navbar