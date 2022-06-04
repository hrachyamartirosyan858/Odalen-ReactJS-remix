export default function MenuButtonBurger({ isChecked, onChange }) {
  return (
    <input
      type="checkbox"
      defaultChecked={false}
      isChecked={isChecked}
      onChange={onChange}
      className="menu-btn z-50"
    ></input>
  );
}
