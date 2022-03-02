import AnimatedNumber from "animated-number-react";
import { useState, useEffect, useRef } from "react";
import Bounty from "react-bounty";

export function NumAnim({ translateY, duration }) {
  const numArr = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4,
    5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4,
    5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ];

  return (
    <div className="overflow-hidden h-9 w-6">
      <div
        className="flex flex-col ease-[cubic-bezier(.04,.1,0,1.05)] items-center"
        style={{
          transform: `translateY(-${translateY}%)`,
          transitionDuration: `${duration}ms`,
        }}
      >
        {numArr.map((item, index) => {
          return (
            <div key={index} className="h-9 text-2xl">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function GrowingNumbers() {
  const [isCounting, setIsCounting] = useState(false);
  const targetRef = useRef(null);

  const callbackFunction = (entries) => {
    const [entry] = entries; // const entry = entries[0];
    setIsCounting(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
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
    <>
      <h1 className="mb-96">Tittle</h1>
      <h1 className="mb-96">Tittle2</h1>
      <div className="flex flex-row" ref={targetRef}>
        <NumAnim translateY={isCounting ? 94 : 0} duration="1500" />
        <NumAnim translateY={isCounting ? 92 : 0} duration="1600"/>
        <NumAnim translateY={isCounting ? 95 : 0} duration="1700"/>
        <NumAnim translateY={isCounting ? 98 : 0} duration="1800"/>
        <NumAnim translateY={isCounting ? 97 : 0} duration="1900"/>
        <NumAnim translateY={isCounting ? 99 : 0} duration="2000"/>
      </div>
    </>
  );
}
