import React from "react";
import { Card } from "react-bootstrap";
import SecondaryButtonEvent from "./SecondaryButtonEvent";

const SwipeCard = ({ title, content, image }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} className="absolute w-[330px] md:w-[410px] h-[421px] top-[-80px] md:top-0 left-[-110px] md:left-0 object-cover" />
      <Card.Body>
        <Card.Title className="absolute w-[315px] top-[-180px] md:top-0 left-[-150px] md:left-0 font-h3 font-[number:var(--h3-font-weight)] text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">{title}</Card.Title>
        <Card.Text className="absolute w-[315px] top-[-60px] md:top-[100px] left-[-150px] md:left-0 font-paragraph font-[number:var(--paragraph-font-weight)] text-white text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">{content}</Card.Text>
        <Card.Button>{SecondaryButtonEvent}</Card.Button>
      </Card.Body>
    </Card>
  );
};

export default SwipeCard;
