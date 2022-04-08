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
import ImageList from "~/components/ImageListMUI";

export const loader = async () => {
  return [
    { title: "ՀԻՄՆԱԿԱՆ ՈՒՏԵՍՏՆԵՐ", source: MainDishes },
    { title: "ՄԱՆՂԱԼ", source: Barbecue },
    { title: "ՆԱԽՈՒՏԵՍՏՆԵՐ", source: Starters },
    { title: "ԱՂՑԱՆՆԵՐ", source: Salads },
    // { title: "ԱԼԿՈՀՈԼԱՅԻՆ ԸՄՊԵԼԻՔՆԵՐ", source: AlcoholicDrinks },
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
  const [visible, setVisible] = useState(true);
  const [menu, setMenu] = useState(menuPrices);
  const [isDisabled, setIsdisabled] = useState(menuPrices.map(() => false));

  function handleMenu(e) {
    setVisible(false);
    setTimeout(() => {
      setMenu(menuPrices.filter((item) => item.title === e.target.value));
    }, 200);
    setTimeout(() => {
      setVisible(true);
    }, 500);
    setIsdisabled(
      menuPrices.map((element) => element.title === e.target.value)
    );
  }

  return (
    <>
      {/* <ImageList itemData={menu}/> */}
      <Link to="/prices/id">
        <ButtonChangeRoute value="Անցնել Օդալեն Կենտրոնի ճաշացանկ" />
      </Link>
      <div className="flex flex-row w-full flex-wrap justify-center sticky top-2 z-50">
        {menuPrices.map((item, index) => {
          return (
            <input
              style={{ backgroundColor: "white" }}
              className={`border m-2 p-2 rounded-xl drop-shadow duration-75 font-medium ${
                isDisabled[index]
                  ? "bg-slate-400 text-orange-600 translate-y-1"
                  : "bg-indigo-600 shadow-3xl"
              }`}
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
            <ImageList
              itemData={item.source}
              title={item.title}
              visible={visible}
              key={index}
            />
          </>
        );
      })}
    </>
  );
}
