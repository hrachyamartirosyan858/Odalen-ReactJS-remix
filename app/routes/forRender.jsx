import AnimatedNumber from "animated-number-react";
import { useState } from "react";
import Bounty from "react-bounty";

export function NumAnim({ translateY }) {
  const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="overflow-hidden h-9 w-6 border">
      <div
        className="flex flex-col h-90 duration-1000 ease-in-out items-center"
        style={{ transform: `translateY(-${translateY}%)` }}
      >
        {numArr.map((item) => {
          return <div className="h-9 text-2xl">{item}</div>;
        })}
      </div>
    </div>
  );
}

export default function GrowingNumbers() {
  const [firstDigit, setFirstDigit] = useState(0);
  const [secondDigit, setSecondDigit] = useState(0);
  const [thirdDigit, setThirdDigit] = useState(0);

  function handleNumChange() {
    if (firstDigit === 90) {
      setFirstDigit(0);
      setSecondDigit(secondDigit === 90 ? 0 : secondDigit + 10);
      setThirdDigit(
        thirdDigit === 90 ? 0 : secondDigit === 90 && thirdDigit + 10
      );
    } else {
      setFirstDigit(firstDigit + 10);
    }
    console.log(secondDigit);
  }

  return (
    <>
      <div className="flex flex-row">
      <Bounty value={456}/>
      <span className="pr-2"></span>
      <Bounty value={134}/>
        <NumAnim translateY={40} />
        <NumAnim translateY={50} />
        <NumAnim translateY={90} />
        <NumAnim translateY={thirdDigit} />
        <NumAnim translateY={secondDigit} />
        <NumAnim translateY={firstDigit} />
      </div>
      <input type="button" value="BUTTON" onClick={handleNumChange} />
    </>
  );
}
