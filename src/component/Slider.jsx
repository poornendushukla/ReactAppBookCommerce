import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-simply-carousel";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";

import "../styles/slider.scss";

export default function Slider(props) {
  const [activeSlide, setActiveSlide] = useState(5);
  const sliderImgSrc = [img1, img2, img3, img4, img5, img6, img7];
  return (
    <div className="slider">
      <Carousel
        updateOnItemClick
        centerMode={true}
        hideNavIfAllVisible={true}
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
          },
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            transform: "scale(1.1)",
          },
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          style: {
            width: 36,
            height: 36,
            outline: 0,
            background: "transparent",
            border: 0,
            alignSelf: "center"
          },
        }}
        backwardBtnProps={{
          style: {
            width: 36,
            height: 36,
            outline: 0,
            background: "transparent",
            border: 0,
            alignSelf: "center"
          },
        }}
        // itemsToShow={8}
        speed={600}
      >
        {Array.from(sliderImgSrc).map((item, index) => (
          <div
            style={{
              border: "20px solid white",
              textAlign: "center",
              lineHeight: "240px",
              boxSizing: "border-box",
              borderRadius: "10px",
              overflow: "hidden",
            }}
            key={index}
          >
            <div className="slider-image">
              <img src={item} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
