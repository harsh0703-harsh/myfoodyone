import React from "react"
import { Link } from 'react-router-dom';

const Food = ({ Food_name, Ingredients, price, Ranking, image_url,id,arrOfData }) => {
    //// Creating details object to pass in FoodInfo with state //////
   const details ={
    Food_name : Food_name,
    price : price,
    Ranking : Ranking,
    Ingredients :Ingredients,
    _id:id, arrOfData,
    image_url : image_url
   }
    return (
        <>
   
        <Link to={{pathname:`/item/${Food_name}`,state:{details:details}}}><div className="food" >
            <div className="food_picture food_pic-1" style={{ backgroundImage: `url(${image_url})` }}>
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
  </>
        )

}
export default Food;