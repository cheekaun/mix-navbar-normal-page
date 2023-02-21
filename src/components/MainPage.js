import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import NavPage from "./NavPage"

const MainPage = () => {
    return(
        <React.Fragment>
            {/* Heading section */}
            <section>
                <div>
                    <Navbar/>
                </div>
            </section>

            {/* sidebar section */}
            <section>
                <div className="grid grid-cols-12" style={{backgroundColor: "#D9D9D9" }}>
                    <div className="col-span-3 h-screen  pl-0 md:col-span-2 truncate" style={{backgroundColor: "#D9D9D9" }} >
                    
                        <Sidebar/>
                    </div>


                    <div className="col-span-9 bg-white h-screen pl-2 md:col-span-10 overflow-y-scroll">
                        <NavPage/>
                    </div>
                </div>
            </section>
        </React.Fragment>
        
    );
}

export default MainPage