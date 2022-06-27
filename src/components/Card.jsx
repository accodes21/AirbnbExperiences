import React from "react";
import star from "../images/star.png"
import image from '../images/katie-zaferes.png'

function Card(props){
    console.log(props)
    return(
        <>
        <div className="card">
            <img src={image} className="card--image" alt=""/>
            <div className="card--stats">
                <img src={star} className="card--star" alt="" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
        </>
    )
}

export default Card;