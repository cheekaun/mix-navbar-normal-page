import React from "react";
import {BsBook} from 'react-icons/bs'
import logo from '../Logo/PlugmoodLOGO.png'

const Navbar = () => {
    return(
        <React.Fragment>
            <section>
                <div className='h-20 w-full flex items-center pl-5 space-x-3 ' style={{backgroundColor: "#3C096C"}}>
                    <div>
                        {/* <BsBook className = 'text-white text-4xl'/> */}
                        <img src={logo} height={80} width={80}/>
                    </div>

                    <div>
                        <p className="text-white text-3xl">Plug Mood</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
        
    );
}

export default Navbar