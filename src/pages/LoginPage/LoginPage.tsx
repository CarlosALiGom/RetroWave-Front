import { useNavigate } from "react-router";
import LoginForm from "../../components/LoginForm/LoginForm";
import useUser from "../../hooks/useUser/useUser";
import { useAppDispatch, useAppSelector } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import { UserCredentialsStructure } from "../../types";
import useToken from "../../hooks/useToken/useToken";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";
import paths from "../../router/paths/paths";
import { useEffect } from "react";

const LoginPage = (): React.ReactElement => {
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();
  const { setToken } = useLocalStorage();
  const token = useAppSelector((state) => state.users.token);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate(paths.home, { replace: true });
    }
  });

  const handleFormSubmit = async (credentials: UserCredentialsStructure) => {
    dispatch(showLoadingActionCreator());
    const token = await getUserToken(credentials);

    if (token) {
      const userData = getTokenData(token);
      const decodedUserData = { ...userData, token };
      dispatch(loginUserActionCreator(decodedUserData));
      dispatch(hideLoadingActionCreator());
      setToken("token", token);
    }
  };

  return <LoginForm submitForm={handleFormSubmit} />;
};

export default LoginPage;
