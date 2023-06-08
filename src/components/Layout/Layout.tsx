import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import ContainerStyled from "../shared/ContainerStyled";
import { useAppSelector } from "../../store";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";

const Layout = (): React.ReactElement => {
  const { ui } = useAppSelector((state) => state);

  return (
    <>
      {ui.message && <Modal isError={ui.isError} message={ui.message} />}
      {ui.isLoading && <Loader />}
      <Header />
      <ContainerStyled className="appContainer">
        <Outlet />
      </ContainerStyled>
    </>
  );
};

export default Layout;
