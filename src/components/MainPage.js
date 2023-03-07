import React, { createContext, useCallback, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import NavPage from "./NavPage"

const AuthContext = createContext({ isAuthenticated: false });

const MainPage = () => {

    
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [dataSession, setDataSession] = useState({});
    const handleLogin = useCallback((data) => {
        // Perform authentication logic
        if (data.email !== "" && data.password !== "") {
          setIsAuthenticated(true);
          setDataSession({
            email: data.email,
            password: data.password,
            session: "logged in",
          });
          // Check if dataSession is updated
        }
      }, []);

    return(
        <AuthContext.Provider value={{ isAuthenticated, dataSession }}>
        <React.Fragment>
        
        { isAuthenticated ? (
           
            <div className="">    
            
                <section>
                    <div className="w-absolute">         
                        <Navbar/>
                    </div>
                
                </section>
            
            
            <section>

            
            <div className="grid grid-cols-12" style={{backgroundColor: "#D9D9D9"}}>
            
                        <div className="col-span-3 h-screen  pl-0 md:col-span-2 truncate " style={{backgroundColor: "#D9D9D9" }} >
                        
                            <Sidebar/>
                        </div>
            

                        <div className="col-span-9 bg-white h-screen pl-2 pr-2 md:col-span-10 overflow-y-scroll">  {/* overflow-y-scroll */}
                            <NavPage handleLogin={handleLogin}/>
                        </div>
                    </div>
                
            </section>

            </div>
        ) : (
            <div className="">    
            
                <section>
                    <div className="w-absolute">         
                        
                    </div>
                
                </section>
            
            
            <section>

            
            <div className="grid grid-cols-12" style={{backgroundColor: "#D9D9D9"}}>
            
                    
            

                        <div className="col-span-12">  {/* overflow-y-scroll */}
                            <NavPage handleLogin={handleLogin}/>
                        </div>
                    </div>
                
            </section>

            </div>
        )}
            
        </React.Fragment>
        </AuthContext.Provider>
    );
}
// Test Add comment from github.com
export default MainPage;
export { AuthContext };
