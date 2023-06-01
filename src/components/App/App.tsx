import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import Layout from "../Layout/Layout";
import useToken from "../../hooks/useToken/useToken";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";

const App = (): JSX.Element => {
  const { getTokenData } = useToken();
  const { getToken } = useLocalStorage();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const token = getToken("token");
  if (token) {
    const userData = getTokenData(token);
    dispatch(loginUserActionCreator(userData));
    navigate("/", { replace: true });
  }

  return <Layout />;
};

export default App;
