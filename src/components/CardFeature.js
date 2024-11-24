import picture from "../assets/dev.jpg";
import React from "react";

function Card(props) {
  const { title, type, location, imgUrl } = props.cardDescription;
  return (
    <div className="bg-blue-50 rounded-lg shadow pb-4">
      <img
        src={imgUrl}
        alt="picture"
        className="w-96 p-4 lg:h-96 object-cover rounded-md"
      ></img>
      <div className="pl-4 font-serif">
        <h2 className="font-bold">{title}</h2>
        <h3>Type: {type}</h3>
        <p>Location: {location}</p>
      </div>
    </div>  
  );
}

export default Card;
