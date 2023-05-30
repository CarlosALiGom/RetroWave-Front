import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import ContainerStyled from "../shared/ContainerStyled";

const Layout = (): React.ReactElement => {
  return (
    <>
      <Header />
      <ContainerStyled className="appContainer">
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;
