import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SimpleDialogDemo from "~/components/DialogSimpleMUI";

export default function TopBar({ bgColor, iconsColor }) {
  return (
    <div className="bg-[#D0C9C0] p-[18px] flex flex-col justify-between h-full">
      <div>
        <img className="" src="Group_25.svg" />
      </div>
      <div className="flex flex-col">
        <div>
          Հեռ՝ <a href="tel: +37433270777">033 27-07-77</a>;{" "}
          <a href="tel: +37410370777">010 37-07-77</a>
        </div>
        <div>Էլ փոստ՝</div>
      </div>
      <div className="flex flex-row">
        <img src="Facebook_F.svg" />
        <img src="Instagram.svg" />
        <img src="TripAdvisor.svg" />
        <img src="Place Marker.svg" />
      </div>
      <div className="flex flex-col text-xs">
        <div className="flex flex-row items-center">
          Օդալեն Երևան&nbsp;
          <img width={15} src="copyright_all_rights_reserved.svg" />
          &nbsp;2022.
        </div>
        <span>Բոլոր իրավունքները պաշտպանված են</span>
      </div>
    </div>
  );
}
