import { useLoaderData, json, Link } from "remix";
import AboutUs from "~/components/AboutUs";
import Carousel from "~/components/Carousel";
import MakeOrder from "~/components/MakeOrder";
import GoogleMap from "~/components/GoogleMap";
import imgData from "~/data/ImagesData.json";
import Card from "~/components/Card";
import CardDavtashen from "~/components/CardRestaurant";
import CardCenter from "~/components/CardCenter";
import Bounty from "react-bounty";

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader = () => {
  return [imgData[0], imgData[1], imgData[2], imgData[3]];
  //return [imgData.slice(0,4)]
};

// https://remix.run/api/conventions#meta
export let meta = () => {
  return {
    title: "Odalen",
    description: "Welcome to Odalen!",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData();

  return (
    <div className="remix__page">
      <main className="flex flex-col items-center">
        <Carousel carouselData={data} />
        <div className="mt-4">Here must be News</div>
        <div className="mt-4">
          <div className="mb-6">
            <CardDavtashen />
          </div>
          <div className="mb-6">
            <CardCenter />
          </div>
        </div>
        <AboutUs />
        <GoogleMap />
        <div className="flex flex-row mt-4">
          <Bounty value={456} style={{ width: "20rem" }} />
          <span className="pr-2"></span>
          <Bounty value={134} />
        </div>
      </main>
      {/* <aside>
        <h2>Demos In This App</h2>
        <ul>
          {data.demos.map(demo => (
            <li key={demo.to} className="remix__page__resource">
              <Link to={demo.to} prefetch="intent">
                {demo.name}
              </Link>
            </li>
          ))}
        </ul>
        <h2>Resources</h2>
        <ul>
          {data.resources.map(resource => (
            <li key={resource.url} className="remix__page__resource">
              <a href={resource.url}>{resource.name}</a>
            </li>
          ))}
        </ul>
      </aside> */}
    </div>
  );
}
