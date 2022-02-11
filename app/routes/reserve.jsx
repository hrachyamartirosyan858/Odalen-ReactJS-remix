import DatePicker from "~/components/DatePicker";
import { Form } from "remix";
import { useLoaderData } from "remix";
import drink from "~/data/MenuAlcoholicDrinks.json";

export const loader = async () => {
  return drink;
};

export default function Reserve() {
  const date = new Date();
  const maxDate = date.setDate(date.getDate() + 7);
  const alcoholicDrinks = useLoaderData()
  console.log(alcoholicDrinks)
  return (
    <Form className="border-2 flex flex-col">
      <div className="mt-4">
        <DatePicker label="Միջոցառման օր" maxDate={maxDate} />
      </div>
    </Form>
  );
}
