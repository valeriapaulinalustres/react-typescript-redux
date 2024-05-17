import styles from './Login.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks/redux/hooks';
import { setUser } from '../../redux/features/user/userSlice';
import { useEffect, useState } from 'react';
import { useLoginMutation } from '../../redux/services/loginServices';

export  const Login = () : JSX.Element =>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
  const [triggerLogin, resultLogin] = useLoginMutation();

    const dispatch = useAppDispatch();
    const userFromRedux = useAppSelector((state) => state.userReducer.value);
useEffect(()=>{

    dispatch(setUser({value:{
        email: 'va@gmail.com',
        first_name: 'Vale',
        last_name: 'Lustres',
        token: 'este es el token'
    }
    }))
},[])

const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
  e.preventDefault()
    try {
     
        const request = {
          email,
          password,        
        };

        console.log('request', request);
        triggerLogin(request);

    } catch (error) {
      console.log('error', error);

    }
  };
console.log('resultLogin', resultLogin)

    return (
      <div>

        <div>{userFromRedux.token}</div>
        <form onSubmit={handleSubmit}>
          <input type='mail' onChange={e=>setEmail(e.target.value)} value={email}  />
          <input type='password' onChange={e=>setPassword(e.target.value)} value={password} />
          <button type='submit'>Login</button>
        </form>
      </div>
    )
}

export default Login