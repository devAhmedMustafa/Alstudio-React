import RegisterForm from "../components/register/RegisterForm";
import { LogedIn } from "../scripts/IsLogedIn";
import {useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../components/navbar/Logo";
import {LoaderStatus} from "../scripts/Loading";

const Register = ()=>{

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
            <RegisterForm/>
        </div>
    )
}

export default Register;