import React from "react";
import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

 const New = () => {
  
    return ( 
        <div className="new"  >
          <Sidebar/>
          <div className="newContainer">
            <Navbar  />
          <div className="new">
  <div className="newContainer">
    <div className="top">
      <h1>Add New User</h1>
    </div>
    <div className="bottom">
      <div className="left">
        <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" />
      </div>
      <div className="right">
        <form className="form">
          <div className="formInput">
            <label>Username : </label>
            <input type="text" placeholder="zaki diedhiou" />
          </div>
          <div className="formInput">
            <label>Name and Surname :  </label>
            <input type="text" placeholder="zaki diedhiou" />
          </div>
          <div className="formInput">
            <label>Email : </label>
            <input type="email" placeholder="zaki_diedhiou@gmail.com" />
          </div>
          <div className="formInput">
            <label>Phone : </label>
            <input type="text" placeholder="221 774077867" />
          </div>
          <div className="formInput">
            <label>Password</label>
            <input type="password" />
          </div>
          <div className="formInput">
            <label>Address</label>
            <input type="text" placeholder="liberté 6" />
          </div>
          <div className="formInput">
            <label>Pays</label>
            <input type="text" placeholder="Casamance" />
          </div>
          <button type="submit">Envoyez</button>
        </form>
      </div>
    </div>
  </div>
</div>

          </div>
        
        </div>
     )
}
export default New


/*

       {
         inputs.map((input)=>(
             <div className="formInput" key={input.id}>
            <label> {input.label} </label>
            <input type={input.type} placeholder={input.placeholder} />
          </div>
         ))
       } 
*/