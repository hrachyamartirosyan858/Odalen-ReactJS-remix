import { useState } from "react";
import { Form } from "remix";
import DatePicker from "~/components/DatePicker";
import drink from "~/data/MenuAlcoholicDrinks.json";
import SelectNum from "~/components/SelectNum";
import Contacts from "~/components/ClientContacts";
import InputMask from "react-input-mask";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Reserve() {
  const date = new Date();
  const maxDate = date.setDate(date.getDate() + 91);
  const [buttonVerson, setButtonVerson] = useState("outlined");
  const customerNumOptions = [
    { value: 2, option: 2 },
    { value: 3, option: 3 },
    { value: 4, option: 4 },
    { value: 5, option: 5 },
    { value: 6, option: 6 },
    { value: 7, option: 7 },
    { value: 8, option: 8 },
    { value: 9, option: 9 },
    { value: 10, option: 10 },
    { value: 11, option: 11 },
    { value: 12, option: 12 },
    { value: 13, option: 13 },
    { value: 14, option: 14 },
    { value: 15, option: 15 },
    { value: 16, option: 16 },
    { value: 17, option: 17 },
    { value: 18, option: 18 },
    { value: 19, option: 19 },
    { value: 20, option: 20 },
    { value: 21, option: 21 },
    { value: 22, option: 22 },
    { value: 23, option: 23 },
    { value: 24, option: 24 },
    { value: 25, option: 25 },
    { value: 26, option: 26 },
    { value: 27, option: 27 },
    { value: 28, option: 28 },
    { value: 29, option: 29 },
    { value: 30, option: 30 },
    { value: 31, option: 31 },
    { value: 32, option: 32 },
    { value: 33, option: 33 },
    { value: 34, option: 34 },
    { value: 35, option: 35 },
    { value: 36, option: 36 },
    { value: 37, option: 37 },
    { value: 38, option: 38 },
    { value: 39, option: 39 },
    { value: 40, option: 40 },
    { value: 41, option: 41 },
    { value: 42, option: 42 },
    { value: 43, option: 43 },
    { value: 44, option: 44 },
    { value: 45, option: 45 },
    { value: 46, option: 46 },
    { value: 47, option: 47 },
    { value: 48, option: 48 },
    { value: 49, option: 49 },
    { value: 50, option: 50 },
    { value: 51, option: 51 },
    { value: 52, option: 52 },
    { value: 53, option: 53 },
    { value: 54, option: 54 },
    { value: 55, option: 55 },
    { value: 56, option: 56 },
    { value: 57, option: 57 },
    { value: 58, option: 58 },
    { value: 59, option: 59 },
    { value: 60, option: 60 },
    { value: 61, option: 61 },
    { value: 62, option: 62 },
    { value: 63, option: 63 },
    { value: 64, option: 64 },
    { value: 65, option: 65 },
    { value: 66, option: 66 },
    { value: 67, option: 67 },
    { value: 68, option: 68 },
    { value: 69, option: 69 },
    { value: 70, option: 70 },
    { value: 71, option: 71 },
    { value: 72, option: 72 },
    { value: 73, option: 73 },
    { value: 74, option: 74 },
    { value: 75, option: 75 },
    { value: 76, option: 76 },
    { value: 77, option: 77 },
    { value: 78, option: 78 },
    { value: 79, option: 79 },
    { value: 80, option: 80 },
  ];

  return (
    <Form className="border-2 flex flex-col">
      <div className="m-3 p-2 border">
        <div className="mt-4">
          <DatePicker label="Միջոցառման օր" maxDate={maxDate} />
        </div>
        <div className="mt-3">
          <SelectNum
            options={customerNumOptions}
            label="Մասնակիցների քանակ"
            required
          />
        </div>
      </div>
      <Contacts />
      <div className="flex flex-row justify-center p-5">
        <Stack spacing={2} sx={{ maxWidth: 130 }}>
          <Button
            onMouseOver={() => setButtonVerson("contained")}
            onMouseLeave={() => setButtonVerson("outlined")}
            variant={buttonVerson}
            type="submit"
          >
            ՀԱՍՏԱՏԵԼ
          </Button>
        </Stack>
      </div>
    </Form>
  );
}
