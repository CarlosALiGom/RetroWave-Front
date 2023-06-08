import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import Layout from "../Layout/Layout";
import useToken from "../../hooks/useToken/useToken";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import { useEffect } from "react";

const App = (): JSX.Element => {
  const { getTokenData } = useToken();
  const { getToken } = useLocalStorage();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const token = getToken("token");
  useEffect(() => {
    if (token) {
      const userData = getTokenData(token);
      const decodedUserData = { ...userData, token };
      dispatch(loginUserActionCreator(decodedUserData));
    }
  }),
    [getTokenData, dispatch, navigate];

  return <Layout />;
};

export default App;
