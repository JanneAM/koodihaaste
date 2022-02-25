import "./Menu.css";

const Menu = ({ options, menuName, selectFunction, selected }) => {
  return (
    <nav className="dropdown">
      <p>{menuName}</p>
      <ul className="dropdown-content">
        {options.map((option) => {
          return (
            <li
              key={option.name}
              className={selected === option.name ? "selected" : ""}
            >
              <button className="menu-button" value={option.name} onClick={selectFunction}>
                {option.name}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
