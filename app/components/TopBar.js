import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SimpleDialogDemo from "~/components/DialogSimpleMUI";

export default function TopBar() {
  return (
    <div className="bg-[#E4DAC2] text-[#261D18] flex flex-row items-center justify-center text-[14px] h-7">
      Ամրագրում<span>&nbsp;</span>
      <a href="tel: +37433270777">033 27-07-77</a>;<span>&nbsp;</span>
      <a href="tel: +37410370777">010 37-07-77</a>
    </div>
  );
}
