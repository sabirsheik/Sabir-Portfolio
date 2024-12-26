import React from "react";
import "./services.css"
export default function Services({id, img, title, statement,link}){
    return(
        <>
        <div className="cards-container">
          <div className="cards-1" key={id}>
            <img src={img} className="D-f" alt="" />
     <div className="overlay">
     <h1>{title}</h1>
      <p>{statement}</p>
      <button className="ser-btn"><a href={link} target="_blank">Explore Now</a></button>
     </div>
    </div>
        </div>
        </>
    )
};

