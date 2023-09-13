import LoginForm from "../components/register/LoginForm";
import { LogedIn } from "../scripts/IsLogedIn";
import {useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../components/navbar/Logo"
import { LoaderStatus } from "../scripts/Loading";

const Login = ()=>{

    const [logged, setLogged] = useState(false);
    const home = useNavigate()

    useEffect(()=>{
        LoaderStatus(false);
    }, [])

    useEffect(()=>{
        LogedIn() && home('/');
    }, [])

    return (
        <div className="">
            <Logo/>
            <LoginForm/>
        </div>
    )
}

export default Login;