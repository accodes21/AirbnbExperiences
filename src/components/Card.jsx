import React from "react";
// import star from "../images/star.png"
// import image from '../images/'

function Card(props){
    // console.log(props)
    return(
        <>
        <div className="card">
            <img src={`/images/${props.item.coverImg}`} className="card--image" alt=""/>
            <div className="card--stats">
                <img src="/images/star.png" className="card--star" alt="" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p className="cards--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
        </>
    )
}

export default Card;