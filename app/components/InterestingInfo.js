import NumberSpiner from "~/components/NumberSpiner";

export default function InterestingInfo() {
  return (
    <div className="flex flex-col items-center m-2 text-yellow-500">
      <span className="text-xl">Հետաքրքիր տեղեկատվություն</span>
      <div className="flex flex-row items-center h-10">
        <span className="h-9 text-sm mr-2 pt-2">Ավելի քան</span>
        <NumberSpiner num={13} />
        <span className="h-9 text-sm mx-2 pt-2">տարի</span>
      </div>
      <div className="flex flex-row items-center h-10">
        <span className="h-9 text-sm mr-2 pt-2">Ավելի քան</span>
        <NumberSpiner num={4900} />
        <span className="h-9 text-sm mx-2 pt-2">նախահաշվով միջոցառում</span>
      </div>
      <div className="flex flex-row items-center h-10">
        <span className="h-9 text-sm mr-2 pt-2">Այցելուներ</span>
        <NumberSpiner num={434564} />
      </div>
    </div>
  );
}
