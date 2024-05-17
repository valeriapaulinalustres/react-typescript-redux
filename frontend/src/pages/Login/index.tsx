import styles from './Login.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks/redux/hooks';
import { setUser } from '../../redux/features/user/userSlice';
import { useEffect } from 'react';

export  const Login = () : JSX.Element =>{

    const dispatch = useAppDispatch();
    const userFromRedux = useAppSelector((state) => state.userReducer.value);
useEffect(()=>{

    dispatch(setUser({value:{
        email: 'va@gmail.com',
        first_name: 'Vale',
        last_name: 'Lustres',
        token: 'añlskjf'
    }
    }))
},[])

    return (
        <div>{userFromRedux.token}</div>
    )
}

export default Login