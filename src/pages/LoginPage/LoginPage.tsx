import { useNavigate } from "react-router";
import LoginForm from "../../components/LoginForm/LoginForm";
import useUser from "../../hooks/useUser/useUser";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";
import { UserCredentialsStructure } from "../../types";
import useToken from "../../hooks/useToken/useToken";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";

const LoginPage = (): React.ReactElement => {
  const { getUserToken } = useUser();
  const { getTokenData } = useToken();
  const { setToken } = useLocalStorage();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (credentials: UserCredentialsStructure) => {
    try {
      const token = await getUserToken(credentials);
      const userData = getTokenData(token);
      const decodedUserData = { ...userData, token };
      setToken("token", token);
      dispatch(loginUserActionCreator(decodedUserData));
      navigate("/home");
    } catch {
      return;
    }
  };

  return <LoginForm submitForm={handleFormSubmit} />;
};

export default LoginPage;
