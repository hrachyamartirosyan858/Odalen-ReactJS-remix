import { imagesData } from "./Data";
import { useState } from "react";
import React from "react"

// const carousel = [imagesData[0], imagesData[1], imagesData[2], imagesData[3]];

export default function Carousel(){

    const [translateX, setTranslateX] = useState(0);
    const [index, setIndex] = useState(0);
    const [carousel, setCarousel] = useState([imagesData[0], imagesData[1], imagesData[2], imagesData[3]])
    
    // loadSlideImages = (startIndex) => {
    //     const slideImages = []
    //     for(let i = startIndex; i <= startIndex + 3 ; i++){
    //         slideImages.push(imagesData[i])
    //     }
    //     setIndex(0);
    //     return slideImages;
    // }

    // [1], [2], [3], [4]
    // 4 1 2 3
    // 3 4 1 2

    const nextImage = () => {
        // if(index === 3) {
        //     setCarousel(carousel[carousel.length-1].concat(carousel.slice(0,carousel.length-1)))
        // }
        setTranslateX(translateX >= (carousel.length - 1) * 25 ? 0 : translateX+100/carousel.length);
        setIndex(index + 1);
        console.log(index) 
    }

    return (
        <div>
        <div className="carousel-container flex flex-row overflow-hidden duration-1000 ease-in-out" 
             style={{transform: `translateX(-${translateX}%)`}}>
            {/* <div><img src={carousel[0].url}/></div>
            <div><img src={carousel[1].url}/></div>
            <div><img src={carousel[2].url}/></div>
            <div><img src={carousel[3].url}/></div> */}
            {carousel.map((item, index) => {
                return (
                    <div>
                        <img src={item.url}/>
                    </div>
                )
            
            })}
        </div>
        <button onClick={nextImage}>Next</button> 
        </div>
    )
}



// <div><img src={carousel[0].url}/></div>
// <div><img src={carousel[1].url}/></div>
// <div><img src={carousel[2].url}/></div>
// <div><img src={carousel[3].url}/></div>