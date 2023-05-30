import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        src="img/logo.png"
        alt="RetroWave logo"
        className="header-logo"
        width="91"
        height="86"
      />
    </HeaderStyled>
  );
};

export default Header;
