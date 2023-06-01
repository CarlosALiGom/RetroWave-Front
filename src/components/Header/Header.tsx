import { useLocation } from "react-router";
import HeaderStyled from "./HeaderStyled";
import NavigationBar from "../NavigationBar/NavigationBar";

const Header = (): React.ReactElement => {
  const { pathname } = useLocation();

  return (
    <HeaderStyled>
      <img
        src="img/RetroWave.svg"
        alt="RetroWave logo"
        className="header-logo"
        width="88"
        height="80"
      />
      {pathname !== "/login" && <NavigationBar />}
    </HeaderStyled>
  );
};

export default Header;
