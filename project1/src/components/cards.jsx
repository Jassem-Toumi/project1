import React from "react";

const Card = (props) => {
  return (
    <a href="https://opensea.io/collection/boredapeyachtclub" target="_blank">
    <div className="card">
        <img className="image" src={props.url} alt="image of an NFT number"/>
        <div className="visitButton">
            <h2>Click to visit market place</h2>
        </div>
         <div className="tagWrapper">
            <h2>NFT #{props.number}</h2>
            <h3>Price: {props.price}ETH</h3>
         </div>
    </div>
    </a>
  );
};

export default Card;
