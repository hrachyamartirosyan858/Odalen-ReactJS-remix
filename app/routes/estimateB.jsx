import { Form } from "remix";
import { useState } from "react";
import SelectNum from "~/components/SelectNum";
import SelectMultiple from "~/components/SelectMultiple";
import SelectBasic from "~/components/SelectBasic";
import TextField from "~/components/TextField";
import Contacts from "~/components/ClientContacts";
import ButtonSubmit from "~/components/ButtonMUI";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
import InputMask from "react-input-mask";

export default function GetEstimateB() {
  const [buttonVerson, setButtonVerson] = useState("outlined");

  const customerNumOptions = [
    { value: 7, option: 7 },
    { value: 13, option: 13 },
    { value: 19, option: 19 },
    { value: 25, option: 25 },
    { value: 31, option: 31 },
    { value: 37, option: 37 },
    { value: 43, option: 43 },
    { value: 49, option: 49 },
    { value: 55, option: 55 },
    { value: 61, option: 61 },
    { value: 67, option: 67 },
    { value: 73, option: 73 },
    { value: 80, option: 80 },
  ];

  const hotDishOptions = [
    { value: "խորոված", label: "Խորոված" },
    { value: "ճուտ", label: "Ճուտ" },
    { value: "քյուֆտա", label: "Քյուֆտա" },
  ];

  const saladOptions = [
    { value: "ամառային", label: "Ամարային" },
    { value: "կեսար", label: "Կեսար" },
    { value: "մայրաքաղաքային", label: "Մայրաքաղաքային" },
  ];

  const drinkOptions = [
    { value: "ցարսկայա", label: "Ցարսկայա" },
    { value: "ամբսոլյուտ", label: "Աբսոլյուտ" },
    { value: "օհանյան", label: "Օհանյան" },
  ];

  return (
    <>
      <h1 className="text-center">ՍՏԱՆԱԼ ՆԱԽԱՀԱՇԻՎ</h1>
      <div className="text-justify my-3 px-4">
        Միջոցառու՞մ եք պլանավորում: Իմացեք նախօրոք Ձեր միջոցառման արժեքը՝
        լրացնելով դատարկ վանդակները և ուղարկելով մեզ:
      </div>
      <Form className="flex flex-col" method="post" reloadDocument>
        <div className="m-3 p-2 border">
          <SelectNum
            options={customerNumOptions}
            label="Մասնակիցների քանակ"
            required
          />
          <div className="mt-3">
            <SelectMultiple options={hotDishOptions} label="Տաք ուտեստ" />
          </div>
          <div className="mt-3">
            <SelectBasic options={saladOptions} label="Աղցան" />
          </div>
          <div className="mt-3">
            <SelectBasic options={drinkOptions} label="Խմիչք" />
          </div>
        </div>
        <Contacts />
        <div className="m-3 p-2 border h-36">
          <TextField />
        </div>
        <ButtonSubmit value="ՀԱՍՏԱՏԵԼ" type="submit" />
      </Form>
    </>
  );
}
