import {FC} from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import style from './Header.module.css'
import {useAuth} from "../../hooks/useAuth.ts";
import {useAppDispatch} from "../../store/hooks.ts";
import {logout} from "../../store/user/userSlice.ts";
import {removeTokenFromLocalStorage} from "../../helpers/localstorage.helper.ts";
import {toast} from 'react-toastify'

const Header: FC = () => {
    const isAuth = useAuth()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const location = useLocation();
    const logoutHandler = () => {
        dispatch(logout())
        removeTokenFromLocalStorage('token')
        toast.success('You logged out.')
        navigate('/')
    }
    return (
        <header className={style.header}>
            <Link to="/" />
            {location.pathname !== '/login' && location.pathname !== '/auth' && (
                <nav className={style.nav}>
                    {isAuth ? (
                        <Link onClick={logoutHandler} className={`${style.signOut} ${style.link}`} to={'/'}>
                            Sign Out
                        </Link>
                    ) : (
                        <>
                            <Link className={`${style.login} ${style.link}`} to={'login'}>
                                Log In
                            </Link>
                            <Link className={`${style.auth} ${style.link}`} to={'auth'}>
                                Sign Up
                            </Link>
                        </>
                    )}
                </nav>
            )}
        </header>
    )
}

export default Header