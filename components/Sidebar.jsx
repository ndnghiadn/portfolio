import Link from "next/link";
import items from "../data-json/sidebar-items.json";
import SwitchBtn from "./SwitchBtn";

const Sidebar = ({ isDarkMode, setIsDarkMode, className }) => {

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`sidebar ${className}`}>
        <SwitchBtn isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <ul>
          {items.map((item, index) => (
            <li key={index} style={{ zIndex: items.length - index }}>
              <Link href={item.link}>
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
