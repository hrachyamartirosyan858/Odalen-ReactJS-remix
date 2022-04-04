import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SimpleDialogDemo from "~/components/DialogSimpleMUI";

export default function TopBar({ bgColor, iconsColor }) {
  return (
    <div>
      <div
        className={`${bgColor} flex flex-row items-center justify-center space-x-4`}
      >
        <div style={{ color: `${iconsColor}` }}>Հետևեք մեզ</div>
        <SimpleDialogDemo iconSrc="facebook-logo.svg" />
        {/* <a href="https://www.facebook.com/odalen.restaurant">
          <img src="facebook-logo.svg" width="18px" />
        </a> */}
        <a href="https://www.instagram.com/odale_restaurant">
          <img src="instagram-logo.svg" width="20px" />
          {/* <FontAwesomeIcon
            icon={["fab", "instagram"]}
            size="1x"
            color={iconsColor}
          /> */}
        </a>
        <a className="pl-1" href="https://g.page/odalenarmenia?share">
          <img src="tripadvisor-logo.svg" width="20px" />
        </a>
      </div>
      <div
        className={`${bgColor} flex flex-row items-center justify-center space-x-4`}
      >
        <div style={{ color: `${iconsColor}` }}>
          Ամրագրում <a href="tel: +37433270777">033 27-07-77</a>,{" "}
          <a href="tel: +374370777">010 37-07-77</a>
        </div>
      </div>
    </div>
  );
}
