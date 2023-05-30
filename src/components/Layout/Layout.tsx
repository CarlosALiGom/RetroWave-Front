import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import ContainerStyled from "../shared/ContainerStyled";
import NavigationBar from "../NavigationBar/NavigationBar";

const Layout = (): React.ReactElement => {
  return (
    <>
      <Header />
      <ContainerStyled className="appContainer">
        <NavigationBar />
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;
