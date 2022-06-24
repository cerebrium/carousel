import React, { useState } from "react";
import "./style.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/body/main";
import { ImageContainer } from "./components/images/ImageContainer";
import { ImageTrack } from "./components/imageTrack/imageTrack";

export const Carousel = () => {
  const [position, setPosition] = useState(0);
  let imagesList = [
    "https://unsplash.it/680/250",
    "https://source.unsplash.com/random/300×300",
    "https://source.unsplash.com/random/400×300",
    "https://source.unsplash.com/random/300×400",
    "https://source.unsplash.com/random/680×250",
    "https://source.unsplash.com/random/500×400",
  ];

  const handleLeft = () => {
    if (position < 0) setPosition((prev) => prev + 600);
  };
  const handleRight = () => {
    if (position > (imagesList.length - 1) * -600)
      setPosition((prev) => prev - 600);
  };

  return (
    <div aria-label="container" className="container">
      <Header />
      <button className="leftArrow" onClick={handleLeft}>{`<`}</button>
      <main className="main">
        <Main position={position}>
          {imagesList.map((image) => {
            return <ImageContainer image={image} />;
          })}
        </Main>
      </main>
      <button className="rightArrow" onClick={handleRight}>{`>`}</button>
      <div className="imageButtons">
        <ImageTrack
          index={position === 0 ? 0 : (position / 600) * -1}
          total={imagesList.length}
        />
      </div>
    </div>
  );
};
