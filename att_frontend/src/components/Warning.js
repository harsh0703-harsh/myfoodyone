import React, { useState } from 'react'

export default function Warning() {
    const [trigger , setTrigger]=useState(true)
    return (
     <>
     {trigger ?   <div className="main-prim-p">
           <div className="main-prim-p2" >
               <section className="frIcjp">
                   <h2 className="fqqqqbk">
                      Message From Creator
                   </h2>   
                   <i onClick={()=>{
                       setTrigger(false)
                   }} className=" btYpry" size="24" color="#1C1C1C" tabIndex="0" aria-label="close Modal"><svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 fmIpur"><title>cross</title><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg></i>
               </section>
             
               <div className="main-info">
                   <p>Hii Visitor</p>
                   <p>Harsh here</p>
                   <p>Just wanted to inform you, that this applciation still in progress, We have just inplemented backend with Node Js and Mongo DB & Frontened with React js, You will not be able to login with "Continue with Google Option" because we have not implemented Firebase till now, You can Easily Register and then You can signin to see the food items, Now you can close this and Visit our website</p>
                   
                   <span>Thanks & Regards</span>
                   

             
               </div>
          
           </div>
            </div> : ""}
 
     </>
    )
}
