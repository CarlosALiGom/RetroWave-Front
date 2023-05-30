import { NavLink } from "react-router-dom";
import NavigationBarStyled from "./NavigationBarStyled";
const NavigationBar = (): React.ReactElement => {
  return (
    <NavigationBarStyled>
      <ul className="navBar__list">
        <li className="navbar__link">
          <NavLink to="/home" className="navbar__link">
            Home
          </NavLink>
        </li>
        <li className="navbar__link">
          <NavLink to="/add" className="navbar__link">
            Add
          </NavLink>
        </li>
        <li className="navbar__link">
          <NavLink to="/login" className="navbar__link">
            Exit
          </NavLink>
        </li>
      </ul>
    </NavigationBarStyled>
  );
};

export default NavigationBar;
