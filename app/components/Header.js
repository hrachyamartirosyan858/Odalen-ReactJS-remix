import { topMenuData } from "./Data";
import { Link } from "remix";

export default function Header({ isChecked }) {
  return (
    <nav
      className={`mt-10 origin-top-left duration-200 mx-8 ${
        !isChecked ? "scale-y-0" : "scale-y-100"
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
