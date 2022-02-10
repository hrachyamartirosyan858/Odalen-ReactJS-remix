import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PriceListChildren from "./PriceListChildren";

export default function PriceList({ title, children }) {
  const [isChecked, setisChecked] = useState(false);

  return (
    <div className=" text-black flex flex-col">
      <span
        className={`overflow-x-hidden px-2  hover:text-cyan-600 font-semibold ${
          !isChecked && "border-b-4"
        }`}
        onClick={() => {
          setisChecked(!isChecked);
        }}
      >
        <span className="">
          <FontAwesomeIcon
            icon={["fas", "angle-right"]}
            size="1x"
            className={`mr-2 duration-300 ${isChecked && "rotate-90"}`}
          />
          {title}
        </span>
      </span>
      <PriceListChildren children={children} isChecked={isChecked} />
    </div>
  );
}
