import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): React.ReactElement => {
  return (
    <LoginFormStyled className="form">
      <h1 className="form__title">Login</h1>
      <div className="form__controls">
        <label htmlFor="username" className="form__label">
          Username:
        </label>
        <input type="text" className="form__input" id="username" />
      </div>
      <div className="form__controls">
        <label htmlFor="password" className="form__label">
          Password:
        </label>
        <input type="password" className="form__input" id="password" />
      </div>
      <button className="form__button">Login</button>
    </LoginFormStyled>
  );
};

export default LoginForm;
