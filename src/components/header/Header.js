import React from 'react';
import Nav from '../navbar/Nav';


const Header = () => {
  return (
    <div className="bg-info">
    <div className= "container-fluid ">
        <div className=" row text-white ">
          <div className="  my-6 col-md-6  ">
          <h2> </h2>
          </div>
          <div className=" col-md-6 ml-4">
          <Nav />
          </div>
         </div>
 </div>    
 </div>   
  )
}

export default Header