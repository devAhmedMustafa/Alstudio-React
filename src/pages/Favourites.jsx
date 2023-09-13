import { useState, useEffect } from "react";
import DesignsContainer from "../components/designs/DesignsContainer"
import Navbar from "../components/navbar/Navbar"
import { LogedIn } from "../scripts/IsLogedIn";
import { GetUser } from "../scripts/GetUserDetails";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/BASE_BACKEND";

const Favourites = ()=>{

    const [logged, setLogged] = useState(true);
    const login = useNavigate();
    const [user, setUser] = useState();

    useEffect(()=>{
        
        GetUser().then((res)=>{
            setUser(res.data.id);
        });
    }, [])

    useEffect(()=>{
        !LogedIn() && login('/login');
    }, [])


    if (!logged){
        login('/login');
    }

    return (
        <div>
            <Navbar/>
            <div className="content bg-white">
                <DesignsContainer url={`${BASE_URL}/designs/?fav=${user||""}`}/>
            </div>
        </div>
    )
}

export default Favourites