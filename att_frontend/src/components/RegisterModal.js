import React,{useState} from 'react'
import "../css/registerModal.css"
import Signin from "./SignIn"


const RegisterModal = (props) => {
/// Creating Function to get values from Input Tag

const [userData,setUserData]= useState({
    name:"", email:"",myPassword:""
});

let name, value;
const handleInputs = (e)=>{
    name = e.target.name;
    value = e.target.value;

    setUserData({...userData,[name]:value});
}

const PostData = async (e)=>{

    e.preventDefault();
    const {name,email,myPassword} = userData;
    
    const res = await fetch("/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            FullName:name,Email:email,password:myPassword
        })
    })  
    const data = await res.json();
    if(data.error==="User Already Present" || !data){
        window.alert("Invalid Registration "+ data.error);
    } else{
        window.alert("Registration Successfull , Go to Login Pannel");
   
    }

}

const [checked,updateChecked] = useState(false);

const CheckedTC =(events)=>{
    updateChecked(events.target.checked)
}
    return (props.trigger)?(
        <>
        <div className="main-prim-p">
           <div className="main-prim-p2" >
               <section className="frIcjp">
                   <h2 className="fqqqqbk">
                       Sign up 
                   </h2>   
                   <i onClick={()=>{
                       props.setTrigger(false)
                   }} className=" btYpry" size="24" color="#1C1C1C" tabIndex="0" aria-label="close Modal"><svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="sc-rbbb40-0 fmIpur"><title>cross</title><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg></i>
               </section>
               <section className="whte">
                   <form method="POST">
                   <div className="main-info">
                   <input required="required" className="put-info" name="name" placeholder="Full Name" value={userData.name} onChange={handleInputs} autoComplete="off"></input>
                   </div>
                   <div className="main-info">
                   <input className="put-info" type="email" required="required" name="email" placeholder="Email" value={userData.email} onChange={handleInputs} autoComplete="off"></input>
                   </div>
                   <div className="main-info">
                   <input className="put-info" type="password" required="required" name="myPassword" placeholder="Password" value={userData.myPassword} onChange={handleInputs} autoComplete="off"></input>
                   </div>                  
                   <div className="i-agree">
                       <input type="checkbox" onChange={CheckedTC} className="check-it">
                       </input>
                       <label>I agree to FoodyOne Terms and Conditions, and Content Policies</label>
                   </div>
                   <div className="main-info">
                   {checked && userData.name.length>3 && userData.email.length>5?<button onClick={PostData} className="create-account"> Create the Account </button>:<button style={{cursor:"not-allowed",backgroundColor:"#736363"}} className="create-account"> Create the Account </button>}
                   
                   </div>
                   <div className="main-info-or">
                  <hr className="straight-line"></hr>
                  <span className="czdGdx">or</span>
                   </div>
                   </form>
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

           </div>
            </div>
        </>):"";
    
}

export default RegisterModal;