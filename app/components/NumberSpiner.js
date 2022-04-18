import { useState, useEffect, useRef } from "react";

export function NumAnim({ translateY, duration }) {
  const numArr = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4,
    5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4,
    5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ];

  return (
    <div className="overflow-hidden h-8 w-6 my-4 border">
      <div
        className="flex flex-col ease-[cubic-bezier(.04,.1,0,1.05)] items-center"
        style={{
          transform: `translateY(-${translateY}%)`,
          transitionDuration: `${duration}ms`,
        }}
      >
        {numArr.map((item, index) => {
          return (
            <div key={index} className="h-8 text-lg">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function GrowingNumbers({ num }) {
  const [isCounting, setIsCounting] = useState(false);
  const stopIndex = 70;
  const ArrOfNUm = num.toString().split("");
  const targetRef = useRef(null);

  const callbackFunction = (entries) => {
    const [entry] = entries; // const entry = entries[0];
    setIsCounting(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, options]);

  return (
    <div className="flex flex-row" ref={targetRef}>
      {ArrOfNUm.map((item, index) => {
        return (
          <NumAnim
            translateY={isCounting ? stopIndex + parseInt(item) : 0}
            duration={isCounting ? index * 100 + 2000 : 0}
          />
        );
      })}
    </div>
  );
}
