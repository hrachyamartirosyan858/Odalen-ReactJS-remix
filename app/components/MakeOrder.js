import { Link } from "remix";
import RestaurantMenuPrices from "~/routes/prices"

export default function MakeOrder() {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="flex items-center justify-center flex-col">
      <Link to="/prices" >
        <input
          type="button"
          value="Ճաշացանկ"
          className="border-solid border-2 border-indigo-600 border-slate-400 rounded w-48"
        />
          </Link>
        <input
          type="button"
          value="Ստանալ նախահաշիվ"
          className="border-solid border-2 border-indigo-600 border-slate-400 rounded w-48"
        />
        <input
          type="button"
          value="Ամրագրել սեղան"
          className="border-solid border-2 border-indigo-600 border-slate-400 rounded w-48"
        />
      </div>
    </div>
  );
}
