import React from "react";
import "./FlagCard.css";

function FlagCard({imagename , imageurl}) {
  return (
    //display the flag
    //one to display the flag name
    <div className="card">
      <div className="card-img">
        <img src={imageurl} alt={imagename} />
      </div>
      <div className="card-text">
        <h1>{imagename}</h1>
      </div>
    </div>
  );
}

export default FlagCard;
