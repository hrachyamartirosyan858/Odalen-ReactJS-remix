import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData, Link } from "remix";
import { imagesData } from "../data";

export default function Carousel({ carouselData }) {
  const carousel = carouselData;
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
    <div className="overflow-hidden relative h-[58%] w-[100%] md:h-[70%]">
      <div
        className="h-full flex flex-row overflow-hidden duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${translateX}%)`,
          width: `${imagesCount * 100}%`,
        }}
      >
        {carousel.map((item, index) => {
          return (
            <div
              key={index}
              className=""
              // style={{ width: "100%", height: "100%" }}
            >
              <img
                // width={imagesCount * 100}
                // height={600}
                style={{ objectFit: "cover", height: "100%", width: "100vw" }}
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
      <div className="absolute z-40 bottom-10 text-[#F2ECE9] m-[18px] px-5 py-3 rounded-[20px] bg-[#5E5946B2] text-2xl font-medium">
        <Link to="/">ՄԵՐ ԱԿՑԻԱՆԵՐԸ</Link>
      </div>
      <div className="flex flex-row justify-center absolute w-full bottom-5">
        {carousel.map((item, index) => {
          return (
            <div
              onClick={() => {
                setTranslateX((index * 100) / imagesCount);
                setImagesIndex(index);
              }}
              className={`rounded-full mx-0.5 mt-0.5 w-3.5 h-3.5 duration-1000 bg-[#FFFFFF] ${
                index === imagesIndex && "opacity-70 scale-125"
              }`}
            ></div>
          );
        })}
      </div>
      {/* <button onClick={nextImage}>Next</button> */}
    </div>
  );
}
