import React from "react";
import "./single.scss"
import Navbar from "../../components/navbar/Navbar";

import Sidebar from "../../components/sidebar/Sidebar";

 const Single = () => {
    return ( 
        <div className="Single" >
         <Sidebar/>
         <div className="singleContainer"></div>
        <Navbar/>
     <div className="top">
      <div className="left">
       <h1 className="title">Information</h1>
       
      </div>
      <div className="right"></div>
     </div>
     <div className="bottom"></div>
        </div>
     )
}
export default Single