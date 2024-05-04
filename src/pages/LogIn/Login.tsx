import React, {FC, useState} from "react"
import {Link} from 'react-router-dom'
import {AuthService} from "../../services/auth.service.ts";
import {useAppDispatch} from "../../store/hooks.ts";
import {setTokenToLocalStorage} from "../../helpers/localstorage.helper.ts";
import {login} from "../../store/user/userSlice.ts";
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import cityImg from '../../assets/city.png'
import style from './Login.module.css'
const Login: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const loginHandler = async (e: React.FormEvent<HTMLFormElement>) =>{
        try{
            e.preventDefault()
            const data = await AuthService.login({ email, password})
            if (data){
                setTokenToLocalStorage('token', data.token)
                dispatch(login(data))
                toast.success('You logged in!')
                navigate('/')
            }
        } catch (err: any) {
            const error = err.response?.data.massage
            toast.error(error.toString())
        }
    }
    return (
        <div className={style.main}>
            <div className={style.imgContainer}>
                <img className={style.img} src={cityImg} alt={"cityImg"}/>
            </div>
            <div className={style.login}>
                <h1>Login</h1>
                <form
                    onSubmit={loginHandler}>
                    <div >
                        <p>Email:</p>
                        <input
                            type="text"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <p>Password:</p>
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className={`${style.forgotPasswordLink} ${style.changeFont}`}>
                        <a href={""}>Forgot password?</a>
                    </div>
                    <button>Sign In</button>
                    <div>
                        <p className={style.changeFont}>Don`t have account?</p>
                        <Link to={"/auth"}>Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login