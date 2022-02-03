import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PriceList({ title, child }) {
  const [ischecked, setIsChecked] = useState(false);
  return (
    <div className=" text-black flex flex-col">
      <span
        className={`overflow-x-hidden px-2  hover:text-cyan-600 font-semibold ${
          !ischecked && "border-b-4"
        }`}
        onClick={() => {
          setIsChecked(!ischecked);
        }}
      >
        <span className="">
          <FontAwesomeIcon
            icon={["fas", "angle-right"]}
            size="1x"
            className={`mr-2 duration-300 ${ischecked && "rotate-90"}`}
          />
          {title}
        </span>
      </span>
      {child.map((item, index) => {
        return (
          <div
            className={`flex-row items-center justify-start border-b-2 ${
              ischecked ? "flex" : "hidden"
            }`}
            key={index}
          >
            <img src={item.url} className="p-4 w-1/3"></img>
            <div className="flex flex-col">
              <div>{item.name}</div>
              <div>{item.price} ֏</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
