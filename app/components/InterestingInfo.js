import NumberSpiner from "~/components/NumberSpiner";

export default function InterestingInfo() {
  return (
    <div className="flex flex-col items-center m-2">
      Հետաքրքիր տեղեկատվություն
      <div className="flex flex-row items-center">
        <span className="h-9 text-2xl mr-2">Ավելի քան</span>
        <NumberSpiner num={13} />
        <span className="h-9 text-2xl mx-2">տարի</span>
      </div>
      {/* <div className="flex flex-row items-center">
        <span className="h-9 text-xl mr-2">Ավելի քան</span>
        <NumberSpiner num={4900} />
        <span className="h-9 text-xl mx-2">նախահաշվով միջոցառում</span>
      </div> */}
      <div className="flex flex-row items-center">
        <span className="h-9 text-2xl mr-2">Այցելուներ</span>
        <NumberSpiner num={434564} />
      </div>
    </div>
  );
}
