import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = (): React.ReactElement => {
  const handleFormSubmit = (): void => {
    return;
  };

  return <LoginForm submitForm={handleFormSubmit} />;
};

export default LoginPage;
