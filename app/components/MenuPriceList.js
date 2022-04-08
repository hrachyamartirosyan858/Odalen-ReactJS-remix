export default function MenuPriceList({ children, visible }) {
  return (
    <div
      className={`h-full 
        ${
          visible
            ? "opacity-100 duration-200 ease-in-out"
            : "opacity-0 duration-100"
        }
      `}
    >
      {children.map((item, index) => {
        return (
          <div
            className="flex flex-row items-center justify-start border-b-2"
            key={index}
          >
            <picture className="p-4 min-w-fit h-24">
              <source srcSet={item.urlAvif} type="image/avif" />
              <source srcSet={item.urlWebP} type="image/webp" />
              <img width="100%" height="auto" src={item.url} alt="" />
            </picture>
            <div className="flex flex-col">
              <div>{item.name}</div>
              <div>{item.price} ֏</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
