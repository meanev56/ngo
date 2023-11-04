import React, { useState } from "react";
import { CardDeck } from "react-bootstrap";
import { Swipeable } from "react-swipeable";
import SwipeCard from "./Card";

const SwipeCards = ({ cardsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1));
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) => (prevIndex === cardsData.length - 1 ? 0 : prevIndex + 1));
    }
  };

  return (
    <Swipeable onSwipedLeft={() => handleSwipe("left")} onSwipedRight={() => handleSwipe("right")}>
      <CardDeck>
        {cardsData.map((card, index) => (
          <SwipeCard
            key={index}
            title={card.title}
            content={card.content}
            image={card.image}
          />
        ))}
      </CardDeck>
    </Swipeable>
  );
};

export default SwipeCards;
