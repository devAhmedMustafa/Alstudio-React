import DesignsContainer from "../components/designs/DesignsContainer";
import Navbar from "../components/navbar/Navbar";
import { LogedIn } from "../scripts/IsLogedIn";
import {useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/BASE_BACKEND";

const Home = ()=>{

    const [logged, setLogged] = useState(false);
    const login = useNavigate()

    useEffect(()=>{
        !LogedIn() && login('/login');
    }, [])

    return (
        <>
            <Navbar/>
            <div className="content">
                <DesignsContainer url={`${BASE_URL}/designs/`}/>
            </div>
        </>
    )
}

export default Home;