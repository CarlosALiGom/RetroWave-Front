import { useNavigate } from "react-router";
import LoginForm from "../../components/LoginForm/LoginForm";
import useUser from "../../hooks/useUser/useUser";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import { UserCredentialsStructure } from "../../types";
import useToken from "../../hooks/useToken/useToken";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { showLoadingActionCreator } from "../../store/ui/uiSlice";
import paths from "../../router/paths/paths";

const LoginPage = (): React.ReactElement => {
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();
  const { setToken } = useLocalStorage();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (credentials: UserCredentialsStructure) => {
    const token = await getUserToken(credentials);
    if (token) {
      const userData = getTokenData(token);
      const decodedUserData = { ...userData, token };
      setToken("token", token);
      dispatch(loginUserActionCreator(decodedUserData));
      dispatch(showLoadingActionCreator());
      navigate(paths.home);
    }
  };

  return <LoginForm submitForm={handleFormSubmit} />;
};

export default LoginPage;
