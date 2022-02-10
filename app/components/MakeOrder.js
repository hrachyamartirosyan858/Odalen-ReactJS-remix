import { Link } from "remix";

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
       <Link to="/estimate">   
        <input
          type="button"
          value="Ստանալ նախահաշիվ"
          className="border-solid border-2 border-indigo-600 border-slate-400 rounded w-48"
        />
        </Link>
        <Link to="/reserve">
        <input
          type="button"
          value="Ամրագրել սեղան"
          className="border-solid border-2 border-indigo-600 border-slate-400 rounded w-48"
        />
        </Link>
      </div>
    </div>
  );
}
