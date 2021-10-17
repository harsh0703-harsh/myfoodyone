import React, { useState, useEffect,useContext } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Homepage.css"
import "../css/Header.css"
import "../css/FoodSection.css"
import axios from 'axios'
import RegisterModal from './RegisterModal';
import HashLoader from "react-spinners/HashLoader";
import ClipLoader from "react-spinners/ClipLoader";
import SignIn from "./SignIn";
import Food from './Cards';
import Footer from './Footer';
import { UserContext } from '../App'; 
import Warning from './Warning';


const Homepage = () => {
    const {state,dispatch} = useContext(UserContext)
    const RenderMenu  =()=>{
        const [Name,setName] = useState('');
        const HomeData =async()=>{
            try{
                const res = await fetch('/authentication',{
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json"
                    },
                });
                const  data = await res.json()
                console.log(data)
                if(res){
                    dispatch({type:"USER",payload:true});
                    setName(data.Email);
                }
            }catch(err){
                console.log(err)
            }
        }
       useEffect(()=>{
           HomeData();
    },[])
       if (state){
           return <>
                 <li className="nav-item">
                                    <NavLink to="#" className="nav-link tt">{Name}</NavLink>
                                </li>
           <li className="nav-item">
                                    <NavLink to="/contact" className="nav-link tt">Contact US</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/logout" className="nav-link tt">Logout</NavLink>
                                </li>
           </>
       }else{
           return(
               <>
                          <li className="nav-item active">
                                    <a onClick={() => {
                                        updateTrigger(true)
                                    }} className="nav-link tt" >Sign UP</a>
                                    <RegisterModal trigger={settrigger} setTrigger={updateTrigger}>
                                    </RegisterModal>
                                </li>
                                <li className="nav-item">
                                    <a onClick={() => {
                                        updateSignin(true)
                                    }} className="nav-link tt">Sign In</a>
                                    <SignIn start={setSignin} setStart={updateSignin} ></SignIn>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact" className="nav-link tt">Contact US</NavLink>
                                </li>
               </>
           )
       }
    }
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, [])

    /////// Axious Fetching the data 
    const url = "http://localhost:5000/my_data";
    const [product, setProduct] = useState([]);

    /////////////////////// Food Items Loader ///////////////
    const [getLoading, foodLoading] = useState(false);

    useEffect(() => {
        axios.get(url).then(res => {
            setProduct(res.data.data);
           
            
        }).catch(err => {
            foodLoading(true);
        })
    }, [])

    ///// signUp Page /////////
    const [settrigger, updateTrigger] = useState(false);
    ///// signIn Page /////////
    const [setSignin, updateSignin] = useState(false);
    return (
        <>
            {loading ? (
                <div className="loader-handler">
                    <HashLoader color={"#366AA0"} loading={loading} size={30} /> </div>)
                :
                <>
                <Warning></Warning>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-transparent prims">
                        <a className="navbar-brand">FoodyOne</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                           
                               <RenderMenu/>
                            </ul>
                        </div>
                    </nav>
                    <div className="header-primary" >
                        <span className="header-primary-main">
                            Find Your Delecious Food
                        </span>
                        <span className="header-primary-sub">Welcome to one of the best Restraunts</span>
                    </div>
                    <div className="page-menu-bar">
                        <span>Our Menu</span>
                    </div>
                    {getLoading ?
                        <div className="food-loader">
                            <ClipLoader color={"#366AA0"} loading={getLoading} size={130} />
                        </div>
                        :
                        <div className="food_items">
                         
                            {product.map(foo => {
                                return <Food id={foo._id} arrOfData={product} key={foo._id}  {...foo} />
                            })}
                        </div>
                    }
                    <Footer/>
                </div>
                </>
               
            }
        </>
    )
}

export default Homepage;