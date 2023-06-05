import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import ContainerStyled from "../shared/ContainerStyled";
import { useAppSelector } from "../../store";
import Loader from "../Loader/Loader";

const Layout = (): React.ReactElement => {
  const { isLoading } = useAppSelector((state) => state.ui);
  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <ContainerStyled className="appContainer">
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;
