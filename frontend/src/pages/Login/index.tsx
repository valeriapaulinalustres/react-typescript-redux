import styles from "./Login.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux/hooks";
import { setUser } from "../../redux/features/user/userSlice";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../../redux/services/loginServices";
import { useNavigate } from "react-router-dom";
import { isAtLeastSixCharacters, isValidEmail } from "../../utils/validations";

export const Login = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const [triggerLogin, resultLogin] = useLoginMutation();

  const dispatch = useAppDispatch();

  const userFromRedux = useAppSelector((state) => state.userReducer.value);

  const navigate = useNavigate();

  useEffect(() => {
    if (resultLogin.isSuccess && resultLogin.data) {
      const { email, first_name, last_name, token } = resultLogin.data;

      dispatch(
        setUser({
          value: {
            email,
            first_name,
            last_name,
            token,
          },
        })
      );
      navigate("/home");
    } else if (resultLogin.isError) {
      setErrorPassword(
        "No puede iniciar sesión con las credenciales proporcionadas"
      );
    }
  }, [resultLogin, dispatch, navigate]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    try {
      const isValidVariableEmail = isValidEmail(email);
      const isCorrectPassword = isAtLeastSixCharacters(password);

      if (isValidVariableEmail && isCorrectPassword) {
        const request = {
          email,
          password,
        };

        triggerLogin(request);
      }

      if (!isValidVariableEmail) {
        setErrorMail("Invalid email");
      } else {
        setErrorMail("");
      }
      if (!isCorrectPassword) {
        setErrorPassword("Password must be at least 6 characters");
      } else {
        setErrorPassword("");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errorMail) {
      setErrorMail("");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (errorPassword) {
      setErrorPassword("");
    }
  };

  return (
    <div>
      <div>{userFromRedux.token}</div>
      <form onSubmit={handleSubmit}>
        <input type="email" onChange={handleEmailChange} value={email} />
        <p>reactdev@iniceptia.ai</p>
        <p>{errorMail}</p>
        <input
          type="password"
          onChange={handlePasswordChange}
          value={password}
        />
        <p>4eSBbHqiCTPdBCTj</p>
        <p>{errorPassword}</p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
