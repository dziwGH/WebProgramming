import React from "react";
import Card from "./Card";

function CardList () {
    const cards = [
        {title: "Card 1", content: "First", color: "lightblue", bColor: "orange"},
        {title: "Card 2", content: "Second", color: "green", bColor: "aqua"},
        {title: "Card 3", content: "Third", color: "orange", bColor: "burlywood"}
      ];

      return (
        <div className="container">
          {
            cards.map((card,index) => (
              <Card key={index}{...card}/>
            
            ))
          }
          
        </div>
      );
}
export default CardList;