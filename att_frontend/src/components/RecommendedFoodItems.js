import React from "react";
import "../css/Recommendation.css"
import { Link } from 'react-router-dom';
const RecommendedFoodItems =({Food_name,Ingredients,Ranking,image_url,price,id,arrOfData})=>{
    const details ={
        Food_name : Food_name,
        price : price,
        Ranking : Ranking,
        Ingredients :Ingredients,
        _id:id, arrOfData,
        image_url : image_url
       }
    return(
        
      
        <div className="other-food-suggestions">
       <Link to={{pathname:`/item/${Food_name}`,state:{details:details}}}> <div className="SFNsjkdsjFNAKDA">
            <div className="PICksjdfekeaf" style={{backgroundImage:`url(${image_url})`}}>
            </div>
            <div className="food_Heading">
                <h3>{Food_name}</h3>
            </div>
            <div className="mid-two-info">
                <section className="food_price">
                    <i className="fa fa-rupee"></i> {price}
                </section>
                <section className="rank-tag">
                    <span >
                        {Ranking} <i className="fa fa-star"></i>
                    </span>
                </section>
            </div>

        </div></Link>
        </div>
       
    )
}
export default RecommendedFoodItems;