import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";

import tailwindUrl from "./styles/tailwind.css";
import TopMenu from "./components/TopMenu";
import stylesUrl from "./styles/styles.css";
// import ImagesQuerySecond from "./components/ImagesQuery";
// import Carousel from "./components/Carousel";
// import CarouselItem from "./components/Carousel";
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
// import AboutUs from "./components/AboutUs";
// import MakeOrder from "./components/MakeOrder";
// import GoogleMap from "./components/GoogleMap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar";
// import NavList from "./components/NavLink"

library.add(fab, fas, faCheckSquare, faCoffee);

// https://remix.run/api/app#links

export let links = () => {
  return [
    { rel: "stylesheet", href: tailwindUrl },
    { rel: "stylesheet", href: stylesUrl },
  ];
};

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body
        className="font-['Noto_Sans_Armenian']"
        // style={{
        //   backgroundImage: `url("bg_image_6.jpg")`,
        //   backgroundAttachment: "fixed",
        //   // backgroundPosition: "center",
        //   backgroundSize: "cover",
        // }}
      >
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <div className="remix-app">
      <header className="remix-app__header z-50">
        <nav
          aria-label="Main navigation"
          className="remix-app__header-nav h-full"
        >
          <Navbar />
          {/* <TopMenu /> */}
          {/* <NavList /> */}
        </nav>
      </header>
      <div className="remix-app__main -z-50">
        <div className="remix-app__main-content h-full">{children}</div>
      </div>
      {/* <footer className="remix-app__footer">
        <BottomBar />
        <div className="container remix-app__footer-content">
          <p>&copy; You!</p>
        </div>
      </footer> */}
    </div>
  );
}
