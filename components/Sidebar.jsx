import items from "../data-json/sidebar-items.json";

const Sidebar = ({ isDarkMode, setIsDarkMode, className }) => {
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

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
            <li key={index} style={{ zIndex: items.length - index }}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
