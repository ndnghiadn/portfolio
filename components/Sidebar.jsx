import Link from "next/link";
import items from "../data-json/sidebar-items.json";

const Sidebar = ({ isDarkMode, setIsDarkMode, className, refs }) => {

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleNavigate = (item) => {
    // refs[1].current.scrollIntoView()
    // console.log('ref', refs[0])
    // console.log('im here')
  }

  return (
    <>
      <div className={`sidebar ${className}`}>
        <label class="switch" htmlFor="dark-mode">
          <input
            type="checkbox"
            id="dark-mode"
            onClick={toggleTheme}
            defaultChecked={isDarkMode}
          />
          <span class="slider"></span>
        </label>
        <ul>
          {items.map((item, index) => (
            <li key={index} style={{ zIndex: items.length - index }} onClick={handleNavigate(item)}>
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
