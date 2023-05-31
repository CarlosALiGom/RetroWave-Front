import { useLocation } from "react-router";
import HeaderStyled from "./HeaderStyled";
import NavigationBar from "../NavigationBar/NavigationBar";

const Header = (): React.ReactElement => {
  const { pathname } = useLocation();

  return (
    <HeaderStyled>
      <img
        src="img/logo.png"
        alt="RetroWave logo"
        className="header-logo"
        width="91"
        height="86"
      />
      {pathname !== "/login" && <NavigationBar />}
    </HeaderStyled>
  );
};

export default Header;
