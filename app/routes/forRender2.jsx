import AnimatedNumber from "animated-number-react";
import { useState } from "react";
import Bounty from "react-bounty";

export default function GrowingNumbers() {
  const [val, setVal] = useState(false);

console.log(val)
  return (
    <>
      <h1 className="mb-96">Tittle</h1>
      <h1 className="mb-96">Tittle2</h1>
      <div className="flex flex-row">
        {/* <Bounty value={456} />
        <span className="pr-2"></span>
        <Bounty value={val} /> */}
        {val ?  <Bounty value={453}/> : <div>000</div> }
      </div>
      <button className="border bg-slate-600" onClick={() => {setVal(!val)}}>BUTTON</button>
    </>
  );
}
