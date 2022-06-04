import topMenuData from "~/data/TopMenuData.json";
import { Link } from "remix";

export default function Header({ open }) {
  return (
    <nav
      className={`duration-200 mx-8 z-20 absolute ${
        !open ? "opacity-100 top-20" : "opacity-0 top-[-490px]"
      }`}
    >
      {topMenuData.map((data) => {
        return (
          <div className="border-b text-slate-500 text-sm py-1.5">
            <Link to="" key={data.id}>
              {data.text}
            </Link>
          </div>
        );
      })}
    </nav>
  );
}
