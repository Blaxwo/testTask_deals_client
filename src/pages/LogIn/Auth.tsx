import React, {FC, useState} from "react"
import {Link} from 'react-router-dom'
import {AuthService} from "../../services/auth.service.ts";
import {toast} from 'react-toastify'
import style from './Login.module.css'
import cityImg from "../../assets/city.png";
const Auth: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) =>{
        try{
            e.preventDefault()
            const data = await AuthService.registration({ email, password})
            if (data){
                toast.success('Account has been created')
            }
        } catch (err: any) {
            const error = err.response?.data.massage
            toast.error(error.toString())
        }
    }
    return (
        <div className={style.main}>
            <div className={style.imgContainer}>
                <img className={style.img} src={cityImg} alt={cityImg}/>
            </div>
            <div className={style.login}>
                <h1>Create your account</h1>
                <form
                    onSubmit={registrationHandler}
                >
                    <div>
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
                    <button>Submit</button>
                    <div>
                        <p className={style.changeFont}>Already have an account?</p>
                        <Link to={"/login"}>Log in</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Auth