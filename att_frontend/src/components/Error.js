import React from 'react'
import {NavLink} from 'react-router-dom';
import '../css/Error.css'


const Error =  ()=>{
    return(
        <>
     
        <div className="error-header-main">
            <span className="error-prim">
                FoodyOne
            </span>
            <div>
                <span className="error-secondary">404 - Page not found </span>
            </div>
           
            <NavLink to="/"> <button>Go to Homepage</button></NavLink>
   
        </div>
      
        </>
    )
}
export default Error;