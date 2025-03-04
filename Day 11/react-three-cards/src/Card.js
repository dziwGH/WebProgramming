import React from "react";
import "./Card.css"; // Import css for styling

function Card({title, content, color, bColor}) {
    const showTitle = () => {
        alert(`Card Title: ${title}`);
    };
    return (
        <div className="card" style = {{backgroundColor: color}}>
            <h2>{title}</h2>

            <p>{content}</p>
            <button onClick={showTitle} style={{backgroundColor: bColor}}>Click here</button>


        </div>
    );
}

export default Card;