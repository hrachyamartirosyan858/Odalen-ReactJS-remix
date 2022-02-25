import { useLoaderData, Link } from "remix";
import Accordion from "~/components/Accordion";
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

  // console.log(menuPrices)

  return (
    <>
      <Link to="/prices/id">
        <ButtonChangeRoute value="Անցնել Օդալեն Կենտրոնի ճաշացանկ" />
      </Link>
      {menuPrices.map((item) => {
        return <Accordion title={item.title} children={item.source} />;
      })}
    </>
  );
}
