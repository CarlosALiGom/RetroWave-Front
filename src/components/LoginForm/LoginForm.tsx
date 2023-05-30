import { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import { UserCredentialsStructure } from "../../types";

interface LoginPropsStructure {
  submitForm: (user: UserCredentialsStructure) => void;
}
const LoginForm = ({ submitForm }: LoginPropsStructure): React.ReactElement => {
  const initialUserCredentials: UserCredentialsStructure = {
    username: "",
    password: "",
  };
  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentials
  );
  const handleLoginForm = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault;
    submitForm(userCredentials);
    setUserCredentials(initialUserCredentials);
  };

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.id]: event.target.value,
    });
  };
  const isValidForm =
    userCredentials.username !== "" && userCredentials.password !== "";

  return (
    <LoginFormStyled
      className="form"
      autoComplete="off"
      onSubmit={handleLoginForm}
    >
      <h1 className="form__title">Login</h1>
      <div className="form__controls">
        <label htmlFor="username" className="form__label">
          Username:
        </label>
        <input
          type="text"
          className="form__input"
          id="username"
          value={userCredentials.username}
          onChange={onChangeData}
        />
      </div>
      <div className="form__controls">
        <label htmlFor="password" className="form__label">
          Password:
        </label>
        <input
          type="password"
          className="form__input"
          id="password"
          value={userCredentials.password}
          onChange={onChangeData}
        />
      </div>
      <button type="submit" className="form__button" disabled={!isValidForm}>
        Login
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
