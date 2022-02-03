import PriceList from "~/components/PriceList";
import Salads from "~/data/MenuSalad.json";
import Starters from "~/data/MenuStarters.json";
import MainDishes from "~/data/MenuMainDishes.json";
import Barbecue from "~/data/MenuBarbecue.json";
// import Assorted from "~/data/MenuAssorted.json";
// import BeerSnack from "~/data/MenuBeerSnack.json";
// import NonAlcoholicDrinks from "~/data/MenuNonAlcoholicDrinks.json";
// import AlcoholicDrinks from "~/data/MenuAlcoholicDrinks.json";
// import TheRest from "~/data/MenuTheRest.json";

const menuList = [
  "ՀԻՄՆԱԿԱՆ ՈՒՏԵՍՏՆԵՐ",
  "ՄԱՆՂԱԼ",
  "ԱՍՈՐՏԻ",
  "ՆԱԽՈՒՏԵՍՏՆԵՐ",
  "ԱՂՑԱՆՆԵՐ",
  "ԳԱՐԵՋՐԻ ԽՈՐՏԻԿՆԵՐ",
  "ՈՉ ԱԼԿՈՀՈԼԱՅԻՆ ԸՄՊԵԼԻՔՆԵՐ",
  "ԱԼԿՈՀՈԼԱՅԻՆ ԸՄՊԵԼԻՔՆԵՐ",
  "ԱՅԼ",
];

export default function RestaurantMenuPrices() {
  return (
    <>
      <PriceList title={menuList[0]} child={MainDishes} />
      <PriceList title={menuList[1]} child={Barbecue} />
      <PriceList title={menuList[3]} child={Starters} />
      <PriceList title={menuList[4]} child={Salads} />
    </>
  );
}
