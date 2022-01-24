import { imagesData } from "./Data";
import { useState, useEffect } from "react";
import React from "react";

const carousel = [imagesData[0], imagesData[1], imagesData[2], imagesData[3]];

export default function Carousel() {
  const [translateX, setTranslateX] = useState(0);
  const [imagesIndex, setImagesIndex] = useState(0);
  const [mouseOn, setMouseOn] = useState(true);
  const imagesCount = carousel.length;

  const nextImage = () => {
    setTranslateX(
      translateX >= ((imagesCount - 1) * 100) / imagesCount
        ? 0
        : translateX + 100 / imagesCount
    );
    setImagesIndex(imagesIndex === imagesCount - 1 ? 0 : imagesIndex + 1);
  };

  useEffect(() => {
    let imageChangeId = null;
    if (mouseOn) {
      imageChangeId = setInterval(nextImage, 10000);
    }
    return () => {
      clearInterval(imageChangeId);
    };
  }, [imagesIndex, translateX, mouseOn]);

  return (
    <div className="overflow-hidden">
      <div
        className="h-1/3 flex flex-row overflow-hidden duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${translateX}%)`,
          width: `${imagesCount * 100}%`,
        }}
      >
        {carousel.map((item) => {
          return (
            <div className="images-container">
              <img
                onMouseOver={() => {
                  setMouseOn(false);
                }}
                onMouseLeave={() => {
                  setMouseOn(true);
                }}
                src={item.url}
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-center">
        {carousel.map((item, index) => {
          return (
            <div
              onClick={() => {
                setTranslateX((index * 100) / imagesCount);
                setImagesIndex(index);
              }}
              className={`pointer rounded-full mx-0.5 mt-0.5 ${
                index === imagesIndex && "selected"
              }`}
            ></div>
          );
        })}
      </div>
      {/* <button onClick={nextImage}>Next</button> */}
    </div>
  );
}
