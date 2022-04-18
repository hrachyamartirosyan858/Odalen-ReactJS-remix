import { useLoaderData, Link } from "remix";
import { useState, useRef, useEffect } from "react";
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
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(-1);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const targetRef = useRef(null);

  const callbackFunction = (entries) => {
    const [entry] = entries; // const entry = entries[0];
    setIsButtonVisible(entry.isIntersecting);
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

  function handleMenu(e, index) {
    setVisible(false);
    setTimeout(() => {
      setMenu(menuPrices.filter((item) => item.title === e.target.value));
    }, 200);
    setTimeout(() => {
      setVisible(true);
    }, 500);
    setSelectedMenuIndex(index);
  }

  return (
    <>
      <div className="">
        <Link to="/prices/id">
          <ButtonChangeRoute value="Անցնել Օդալեն Կենտրոնի ճաշացանկ" />
        </Link>
      </div>
      <div
        className="flex flex-row w-full flex-wrap justify-center top-2 z-50"
        ref={targetRef}
      >
        {menuPrices.map((item, index) => {
          return (
            <input
              // style={{ backgroundColor: "white" }}
              className={`border m-2 p-2 rounded-xl text-xs drop-shadow duration-75 font-medium ${
                index === selectedMenuIndex
                  ? "bg-slate-400 text-orange-600 translate-y-1"
                  : "bg-slate-200 shadow-3xl"
              }`}
              type="button"
              onClick={(e) => handleMenu(e, index)}
              value={item.title}
              key={index}
              disabled={index === selectedMenuIndex}
            />
          );
        })}
      </div>
      <div
        className={`flex flex-row justify-end sticky top-0 z-50 ${
          isButtonVisible && "invisible"
        }`}
      >
        <button
          className="border z-50"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        >
          UP
        </button>
      </div>
      {menu.map((item, index) => {
        return (
          <ImageList
            itemData={item.source}
            title={item.title}
            visible={visible}
            key={index}
          />
        );
      })}
    </>
  );
}
