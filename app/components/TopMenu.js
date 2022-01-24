import { useState } from "react";
import MenuButtonBurger from "./MenuBtnBurger";
import Header from "./Header";

export default function TopMenu() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div style={{ height: "28vh" }}>
      <MenuButtonBurger
        isChecked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
        }}
      />
      <Header isChecked={isChecked} />
    </div>
  );
}
