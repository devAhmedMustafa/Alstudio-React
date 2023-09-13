import { useEffect, useState } from "react";
import AddDesignForm from "../components/addDesign/AddDesignForm";
import Navbar from "../components/navbar/Navbar"
import { LogedIn } from "../scripts/IsLogedIn";
import {useNavigate } from "react-router-dom";

const AddDesign = ()=>{

    const [logged, setLogged] = useState(true);
    const login = useNavigate()

    useEffect(()=>{
        !LogedIn() && login('/login');
    }, [])

    

    return (
        <>
            <Navbar/>
            <div className="content">
                <AddDesignForm/>
            </div>
        </>
    )
}

export default AddDesign;