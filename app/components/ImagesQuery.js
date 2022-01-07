import { imagesData } from "./Data";
import { useState } from "react";

export default function ImagesQuerySecond() {
  const slide = [imagesData[0], imagesData[1], imagesData[2]];
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent(current === slide.length - 1 ? 0 : current + 1);
  };

  const previousImage = () => {
    setCurrent(current === 0 ? slide.length - 1 : current - 1);
  };

  return (
    <div>
      {slide.map((image, index) => {
        return (
          <div
            className={`slide ${index === current && "active"}`}
            key={index}
          >
            {index === current && (
              <img
                src={image.url}
                alt="restaurant image"
                className="restaurant-img"
              />
            )}
          </div>
        );
      })}
      <button 
        className="next-image"
        style={{ border: "solid black" }}
        onClick={nextImage}
      >
        next
      </button>
      <button
        className="previous-image"
        style={{ border: "solid black" }}
        onClick={previousImage}
      >
        previous
      </button>

    </div>
  );
}
