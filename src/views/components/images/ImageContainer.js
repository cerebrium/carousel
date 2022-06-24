import React from "react";
import "./style.css";

export const ImageContainer = ({ image }) => {
  return (
    <picture className="imageContainer">
      <img src={image} alt="alt text" loading="lazy" />
      {/* <img src="https://unsplash.it/680/250" alt="placeholder" loading="lazy" /> */}
    </picture>
  );
};
