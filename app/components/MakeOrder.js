import { Link } from "remix";
import ButtonSubmit from "~/components/ButtonMUI";

export default function MakeOrder({prices, estimate, reserve}) {
  return (
    <div className="flex items-center justify-center mb-8 w-full">
      <div className="flex items-center justify-center flex-col">
        <Link to={prices}>
          <ButtonSubmit type="button" value="Ճաշացանկ" />
        </Link>
        <Link to={estimate}>
          <ButtonSubmit type="button" value="Ստանալ նախահաշիվ" />
        </Link>
        <Link to={reserve}>
          <ButtonSubmit type="button" value="Ամրագրել սեղան" />
        </Link>
      </div>
    </div>
  );
}
