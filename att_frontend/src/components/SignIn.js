import React,{useState,useContext} from 'react';
import "../css/registerModal.css"
import {useHistory} from "react-router-dom"
import { UserContext } from '../App'; 

const Signin = (props) => { 
    const {state,dispatch} = useContext(UserContext)
const history =  useHistory();
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const LoginUser= async (e)=>{
  e.preventDefault();
  const res = await fetch("/signin",{
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          Email:email,
          mypassword:password
      })
  })
  const data = await res.json();
  if(res.status===200){
      dispatch({type:"USER",payload:true})
    history.push("/")    
  }
  else{
window.alert("Invalid Credentials")
 
  }
}
    return (props.start) ?
        <>
            <div className="main-prim-p">
                <div className="main-prim-p2" >
                    <form method="POST"> 
                
                    <section className="frIcjp">
                        <h2 className="fqqqqbk">Sign In</h2>
                        <i onClick={() => { props.setStart(false) }} className=" btYpry" size="24" color="#1C1C1C" tabIndex="0" aria-label="close Modal"><svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 fmIpur"><title>cross</title><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg></i>
                    </section>
                    <section className="whte">
                        <div className="main-info">
                            <input value={email} required="required" onChange={(e)=>setEmail(e.target.value)} className="put-info" placeholder="Email"></input>
                        </div>
                        <div className="main-info">
                            <input value={password} required="required" onChange={(e)=>setPassword(e.target.value)} type="password" className="put-info" placeholder="Password"></input>
                        </div>
                        <br></br>
                        <button  onClick={LoginUser} className="create-account"> Sign In </button>
                        <div className="main-info-or">
                            <hr className="straight-line"></hr>
                            <span className="czdGdx">or</span>
                        </div>
                    </section>
                    <div className="main-info">
                        <button className="google-div" style={{cursor:"not-allowed"}}>
                            <section className="icon-section">
                                <i className="fa fa-google-plus"></i>
                            </section>
                            <section className="icon-title">
                                Continue with Google
                            </section>
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </>
        : ""
}
export default Signin;