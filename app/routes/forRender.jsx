import { useLoaderData, Link } from "remix";
import { useState } from "react";
import * as React from "react";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
// import PriceList from "~/components/PriceList";
import Salads from "~/data/MenuSalad.json";
import Starters from "~/data/MenuStarters.json";
import MainDishes from "~/data/MenuMainDishes.json";
import Barbecue from "~/data/MenuBarbecue.json";
// import Assorted from "~/data/MenuAssorted.json";
// import BeerSnack from "~/data/MenuBeerSnack.json";
// import NonAlcoholicDrinks from "~/data/MenuNonAlcoholicDrinks.json";
import AlcoholicDrinks from "~/data/MenuAlcoholicDrinks.json";
// import TheRest from "~/data/MenuTheRest.json";
import ButtonChangeRoute from "~/components/ButtonMUI";
import MenuPriceList from "~/components/MenuPriceList";

export const loader = async () => {
  return [
    { title: "ՀԻՄՆԱԿԱՆ ՈՒՏԵՍՏՆԵՐ", source: MainDishes },
    { title: "ՄԱՆՂԱԼ", source: Barbecue },
    { title: "ՆԱԽՈՒՏԵՍՏՆԵՐ", source: Starters },
    { title: "ԱՂՑԱՆՆԵՐ", source: Salads },
    { title: "ԱԼԿՈՀՈԼԱՅԻՆ ԸՄՊԵԼԻՔՆԵՐ", source: AlcoholicDrinks },
  ];
};

// const menuList = [
//   "ՀԻՄՆԱԿԱՆ ՈՒՏԵՍՏՆԵՐ",
//   "ՄԱՆՂԱԼ",
//   "ԱՍՈՐՏԻ",
//   "ՆԱԽՈՒՏԵՍՏՆԵՐ",
//   "ԱՂՑԱՆՆԵՐ",
//   "ԳԱՐԵՋՐԻ ԽՈՐՏԻԿՆԵՐ",
//   "ՈՉ ԱԼԿՈՀՈԼԱՅԻՆ ԸՄՊԵԼԻՔՆԵՐ",
//   "ԱԼԿՈՀՈԼԱՅԻՆ ԸՄՊԵԼԻՔՆԵՐ",
//   "ԱՅԼ",
// ];

export default function RestaurantMenuPrices() {
  const menuPrices = useLoaderData();
  const arrIsdisabled = menuPrices.map(() => false);

  // console.log(arrIsdisabled);

  const [visible, setVisible] = useState(true);
  const [menu, setMenu] = useState(menuPrices);
  const [isDisabled, setIsdisabled] = useState(arrIsdisabled);

  function handleMenu(e) {
    setVisible(false);
    setTimeout(() => {
      setMenu(menuPrices.filter((item) => item.title === e.target.value));
      setVisible(true);
    }, 500);
    setIsdisabled(
      menuPrices.map((element) => element.title === e.target.value)
    );
  }
  console.log(typeof isDisabled[0]);
  return (
    <>
      <Link to="/prices/id">
        <ButtonChangeRoute value="Անցնել Օդալեն Կենտրոնի ճաշացանկ" />
      </Link>
      <div className="flex flex-col">
        {menuPrices.map((item, index) => {
          return (
            <input
              type="button"
              onClick={handleMenu}
              value={item.title}
              key={index}
              disabled={isDisabled[index]}
            />
          );
        })}
      </div>

      {menu.map((item, index) => {
        return (
          <>
            <div>{item.title}</div>
            <MenuPriceList
              children={item.source}
              visible={visible}
              key={index}
            />
          </>
        );
      })}
    </>
  );
}
