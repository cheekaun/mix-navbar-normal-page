import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import NavPage from "./NavPage"

const MainPage = () => {
    return(
        <React.Fragment>
            {/* Heading section */}
            <div className="">     {/* ถ้าเป็น fixed จะมีปัญหาอีกนิดนึง , absolute พอใช้ได้ แต่มีบัคนิดหน่อย*/}

            <section>
                <div className="w-absolute"> {/* w-screen ขวาเกินไปนิสนึง*/}
                    <Navbar/>
                </div>
            </section>

            {/* sidebar section */}
            <section>
                <div className="grid grid-cols-12" style={{backgroundColor: "#D9D9D9" }}>
                    <div className="col-span-3 h-screen  pl-0 md:col-span-2 truncate" style={{backgroundColor: "#D9D9D9" }} >
                    
                        <Sidebar/>
                    </div>


                    <div className="col-span-9 bg-white h-screen pl-2 pr-2 md:col-span-10 overflow-y-scroll">
                        <NavPage/>
                    </div>
                </div>
            </section>

            </div>
        </React.Fragment>
        
    );
}
// Test Add comment from github.com
export default MainPage
