import { Form } from "remix";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import InputMask from "react-input-mask";
import { Button } from "@mui/material";

export default function GetEstimate() {

  const animatedComponents = makeAnimated();

  const customerNumOptions = [
    { value: 7, label: 7 },
    { value: 13, label: 13 },
    { value: 19, label: 19 },
    { value: 25, label: 25 },
    { value: 31, label: 31 },
    { value: 37, label: 37 },
    { value: 43, label: 43 },
    { value: 49, label: 49 },
    { value: 55, label: 55 },
    { value: 61, label: 61 },
    { value: 67, label: 67 },
    { value: 73, label: 73 },
    { value: 80, label: 80 },
  ];
  
  const hotDishOptions = [
    { value: "խորոված", label: "Խորոված" },
    { value: "ճուտ", label: "Ճուտ" },
    { value: "քյուֆտա", label: "Քյուֆտա" },
  ];
  
  const saladOptions = [
    { value: "ցարսկայա", label: "Ցարսկայա" },
    { value: "ամբսոլյուտ", label: "Աբսոլյուտ" },
    { value: "ամառային", label: "Ամարային" },
  ];
  
  const drinkOptions = [
    { value: "կեսար", label: "Կեսար" },
    { value: "մայրաքաղաքային", label: "Մայրաքաղաքային" },
    { value: "օհանյան", label: "Օհանյան" },
  ];
  
  function showValue(e) {
    console.log(e.target.value);
  }

  return (
    <>
      <h1 className="text-center">ՍՏԱՆԱԼ ՆԱԽԱՀԱՇԻՎ</h1>
      <div className="text-justify">
        Միջոցառու՞մ եք պլանավորում: Իմացեք նախօրոք Ձեր միջոցառման արժեքը՝
        լրացնելով դատարկ վանդակները և ուղարկելով մեզ:
      </div>
      <Form className="border-2 flex flex-col" method="post" reloadDocument>
        <Select
          className="my-6"
          id="custom-num"
          placeholder="Մասնակիցների քանակ"
          options={customerNumOptions}
          required
        ></Select>

        <Select
          className="mb-6"
          placeholder="Տաք ուտեստ"
          closeMenuOnSelect={false}
          components={animatedComponents}
          options={hotDishOptions}
          isMulti
        ></Select>

        <Select
          id="salad"
          options={saladOptions}
          placeholder="Աղցան"
          className="mb-6"
        ></Select>

        <Select
          id="drink"
          options={drinkOptions}
          placeholder="Խմիչք"
          className="mb-6"
        ></Select>

        <input
          className="border border-slate-300 rounded pl-3 mb-6"
          type="email"
          name="email"
          id="email"
          placeholder="Էլ. փոստ"
        />

        <InputMask
          mask="✆: +374 (99) 99-99-99"
          className="border-2 border-slate-300 rounded pl-3 mb-6"
          placeholder="✆: +374 (__) __-__-__"
          //   alwaysShowMask
        />

        <input
          className="border-2 border-slate-500 rounded min-h-fit pl-3 mb-6"
          type="text"
          placeholder="նշումներ"
        />

        {/* <input
          className="border-2 border-slate-500 rounded pl-3 mb-6"
          type="submit"
          value="Հաստատել"
        /> */}

        <Button type="sumbit">Հաստատել</Button>
      </Form>
    </>
  );
}
