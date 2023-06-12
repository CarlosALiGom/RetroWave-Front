import { useLocation } from "react-router";
import HeaderStyled from "./HeaderStyled";
import NavigationBar from "../NavigationBar/NavigationBar";
import paths from "../../router/paths/paths";

const Header = (): React.ReactElement => {
  const { pathname } = useLocation();

  return (
    <HeaderStyled>
      <img
        src="/img/RetroWave.svg"
        alt="RetroWave logo"
        className="header-logo"
        width="88"
        height="80"
      />
      {pathname !== paths.login && <NavigationBar />}
    </HeaderStyled>
  );
};

export default Header;
