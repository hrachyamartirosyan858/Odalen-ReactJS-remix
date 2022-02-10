export default function PriceListChildren({ children, isChecked }) {
  return (
    <>
      {children.map((item, index) => {
        return (
          <div
            className={`flex-row items-center justify-start border-b-2 ${
              isChecked ? "flex" : "hidden"
            }`}
            key={index}
          >
            <img src={item.url} className="p-4 w-1/3"></img>
            <div className="flex flex-col">
              <div>{item.name}</div>
              <div>{item.price} ֏</div>
            </div>
          </div>
        );
      })}
    </>
  );
}
