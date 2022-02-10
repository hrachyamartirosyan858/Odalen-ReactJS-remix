import PriceList from "~/components/PriceList";
import Salads from "~/data/MenuSalad.json";
import Starters from "~/data/MenuStarters.json";
import MainDishes from "~/data/MenuMainDishes.json";
import Barbecue from "~/data/MenuBarbecue.json";
// import Assorted from "~/data/MenuAssorted.json";
// import BeerSnack from "~/data/MenuBeerSnack.json";
// import NonAlcoholicDrinks from "~/data/MenuNonAlcoholicDrinks.json";
import AlcoholicDrinks from "~/data/MenuAlcoholicDrinks.json";
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

  let arr = [AlcoholicDrinks, Barbecue]

  return (
    <>
      <PriceList title={menuList[0]} children={MainDishes} />
      <PriceList title={menuList[1]} children={Barbecue} />
      <PriceList title={menuList[3]} children={Starters} />
      <PriceList title={menuList[4]} children={Salads} />
      <PriceList title={menuList[7]} children={AlcoholicDrinks} />  
    </>
  );
}
