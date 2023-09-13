import { useEffect, useState } from "react"
import DesignsContainer from "../components/designs/DesignsContainer"
import Navbar from "../components/navbar/Navbar"
import { useParams } from "react-router-dom"
import UserData from "../components/profile/UserData"
import { LogedIn } from "../scripts/IsLogedIn";
import {useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/BASE_BACKEND"

const Profile = ()=>{

    const [logged, setLogged] = useState(true);
    const login = useNavigate();
    const username = useParams('username');

    useEffect(()=>{
        !LogedIn() && login('/login');
    }, [])
    
    return(
        <>
            <Navbar/>
            <div className="content bg-white">
                <UserData/>
                <DesignsContainer url={`${BASE_URL}/designs/?artist=${username.username}`}/>
            </div>
        </>
    )
}

export default Profile