import { useState } from "react";
import MenuButtonBurger from "./MenuBtnBurger";
import Header from "./Header";

export default function TopMenu() {
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ height: "63px" }} className="flex justify-between z-50">
      <img src="Group_17.svg" width="134px" />
      <div className="flex flex-row justify-end w-full">
        <img
          src={isOpen ? "menu-outline.svg" : "close-outline.svg"}
          onClick={() => setIsOpen(!isOpen)}
        />
        <Header open={isOpen} onClick={() => setIsOpen(true)} />
      </div>
    </div>
  );
}
