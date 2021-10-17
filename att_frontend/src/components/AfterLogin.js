import React,{useState,useContext} from 'react';
import "../css/registerModal.css"
import {useHistory} from "react-router-dom"
import { UserContext } from '../App'; 

const IfNotAuthorized = (props) => {
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
    history.push("/")
  }
  else{
    dispatch({type:"USER",payload:true})
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
                        <button className="google-div"  style={{cursor:"not-allowed"}}>
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
export default IfNotAuthorized;