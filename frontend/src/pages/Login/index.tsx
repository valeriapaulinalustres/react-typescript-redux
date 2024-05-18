import styles from "./Login.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux/hooks";
import { setUser } from "../../redux/features/user/userSlice";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../../redux/services/loginServices";
import { useNavigate } from 'react-router-dom';

export const Login = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [triggerLogin, resultLogin] = useLoginMutation();

  const dispatch = useAppDispatch();

  const userFromRedux = useAppSelector((state) => state.userReducer.value);

  const navigate = useNavigate();

  useEffect(() => {
    if (resultLogin.data) {
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
      navigate('/home');
    }


  }, [resultLogin, dispatch, navigate]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    try {
      const request = {
        email,
        password,
      };

      console.log("request", request);
      triggerLogin(request);
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log("resultLogin", resultLogin);

  return (
    <div>
      <div>{userFromRedux.token}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <p>reactdev@iniceptia.ai</p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <p>4eSBbHqiCTPdBCTj</p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
