import React,{ useEffect, useState } from 'react';
import "../css/FoodInfo.css"
import Footer from './Footer';
import MapApI from './GoogleMap';
import Food from "./Cards"
import Recommended from './Recommended';     
import { useHistory } from 'react-router-dom';
import IfNotAuthorized from "../components/AfterLogin"
const MyItem =(props)=>{
    const [isAuth,setAuth] = useState(false)
    const history = useHistory();
    const IsAuthentified = async ()=>{
        try{
            const res = await fetch("/authentication",{
                method:"GET",
                headers:{
                    Accept:"application/json",  
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
            const data = await res.json()   
            if(!res.status===200){
                const error = new Error(res.error)
                throw error;
            }
        }catch(err){
            console.log(err)
            setAuth(true);
        }
    }
    useEffect(() => {
        IsAuthentified();
    }, [])
    return(
        <>
        {isAuth ? <IfNotAuthorized start={isAuth} setStart={setAuth}></IfNotAuthorized>: <>
        <div className="main-info-food">
            <form method="GET">
            <div className="food-full-info" >
            <section className="food-pic-info" style={{ backgroundImage: `url(${props.url})` }}>
               
            </section>
            <section className="food-content">
                <div className="food-name-style">
                    <span>{props.name}</span>
                </div>
                <div className="ANFCaksnSNCKA">
                </div>
                <div className="ANFCaksnSNCKA">
                    <div className="BFDAdjsKNDLV">
                    <span>Price : {props.price} Rupees</span>
                    <span>Ranking : {props.rank}</span>
                    <span>Ingredients : {props.ingredients}</span>
                    </div>
                </div>
                <div className="ANFCaksnSNCKA">
                <button type="button" class="btn btn-info mx-2">Add Reviews</button>
                <button type="button" class="btn btn-info mx-2">Direction</button>
                <button type="button" class="btn btn-info mx-2">Add Reviews</button>
                <button type="button" class="btn btn-info mx-2">Share</button>

                </div>
          
            </section>
            </div>
            <div className="jkcVSKDNVsvcnds">
                <span className="contentCNAKSDsdnkvs">Our Location</span>
                <span className="contentCNAKSDsdnkvs">Recommended Items</span>
            </div>
            <div className="location-mapper">
                <section className="mapper-only">  
                  <MapApI></MapApI>
                  </section>
                  <section className="recommended-area">  
                      <Recommended arrOfData={props.arrOfData} notToShow={{
                          _id:props.id
                      }}></Recommended>
              
                  </section>
        
            </div>

           </form>
        </div>
        <Footer/>
              </>      }
        </>
    )
}

export default MyItem;