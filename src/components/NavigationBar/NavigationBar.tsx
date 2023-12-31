import { NavLink, useNavigate } from "react-router-dom";
import NavigationBarStyled from "./NavigationBarStyled";
import { useAppDispatch } from "../../store";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { logOutUserActionCreator } from "../../store/user/userSlice";
import Button from "../Button/Button";
import paths from "../../router/paths/paths";
const NavigationBar = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { removeToken } = useLocalStorage();

  const logOutClick = () => {
    dispatch(logOutUserActionCreator());
    removeToken("token");
    navigate(paths.login);
  };

  return (
    <NavigationBarStyled className="navBar">
      <ul className="navBar__list">
        <li className="navBar__link">
          <NavLink to="/home" className="navBar__link">
            Home
          </NavLink>
        </li>
        <li className="navBar__link">
          <NavLink to="/addSynth" className="navBar__link">
            Add
          </NavLink>
        </li>
        <li className="navBar__link">
          <Button
            className="navBar__button"
            text="Exit"
            actionOnClick={logOutClick}
          />
        </li>
      </ul>
    </NavigationBarStyled>
  );
};

export default NavigationBar;
