import React from "react"
import RecommendedFoodItems from "./RecommendedFoodItems"

const Recommended = ({notToShow, arrOfData})=>{
    const finalData = arrOfData.filter(e=>e._id!==notToShow._id)
    return(
        <>
     
       {finalData.map(e=>{
           return <RecommendedFoodItems arrOfData={arrOfData}  key={e._id} {...e}></RecommendedFoodItems>
       })}
     
        </>
    )
}

export default Recommended;