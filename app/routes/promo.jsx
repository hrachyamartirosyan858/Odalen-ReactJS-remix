import imgData from "~/data/ImagesData.json";
import { useLoaderData, json, Link } from "remix";

export let loader = () => {
  return [imgData[0]];
  //return [imgData.slice(0,4)]
};

export default function Promo() {
  let data = useLoaderData();

  return (
    <div>
      <img src={imgData[0].url} />
    </div>
  );
}
