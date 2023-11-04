import React from "react";
import "./App.css";
import SwipeCards from "./SwipeCards";

const cardsData = [
  {
    title: "Mission smile 1k: Outdoor charity",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "/public/images/unsplash-cveoh-jjmee.png",
  },
  {
    title: "Weekly excursions",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "card2.jpg",
  },
  {
    title: "Monthly public awareness",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    image: "/public/images/unsplash-iigovkrty8g.png",
  },
];

function App() {
  return (
    <div className="App">
      <SwipeCards cardsData={cardsData} />
    </div>
  );
}

export default App;
