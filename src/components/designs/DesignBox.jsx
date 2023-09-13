import axios from "axios";
import { useState, useEffect } from "react";
import LoveBtn from "./loveBtn";
import "../../styles/designBox.css";
import { Link, useNavigate } from "react-router-dom";
import DesignPage from "./DesignPage";
import {BASE_URL} from "../../constants/BASE_BACKEND"

const DesignBox = (props)=>{
    const design = props.design;
    const img = `${BASE_URL}${design.img}`;
    const [username, setUsername] = useState("");
    const [isShown, setShow] = useState(false);
    const profile = useNavigate()

    const handleShow = (event)=>{
        setShow(current=> !current);
    }

    const ArtistProfile = ()=>{
        profile(`/profile/${username}`);
    }

    const getArtist = async ()=>{
        const res = await axios.get(`/account/getusername/${design.artist}`);
        return res;
    }

    useEffect(()=>{
        getArtist().then((res)=> setUsername(res.data.username));
    }, [])

    return (
        <>
            <button className="w-full float-right mb-2 break-before-avoid h-fit overflow-hidden rounded-2xl relative d-box"
            onClick={handleShow}>
                <div className="absolute hidden bg-[#0c0c0cab] top-0 left-0 w-full h-full p-4 text-white d-details cursor-zoom-in">
                    <div className="flex justify-between text-lg flex-wrap">
                        <span className="bg-[#f0f0f0d8] text-black px-3 py-1 rounded-full">{design.title}</span> 
                        <button className="bg-[#f0f0f0d8] text-black px-3 py-1 rounded-full" onClick={ArtistProfile}>
                            <span>{username}</span> <i className="fa-solid fa-user"></i>
                        </button>
                        <LoveBtn design={design.uuid}/>
                    </div>
                </div>
                <img src={img} alt="" loading="lazy" className="w-full object-cover"/>
                
            </button>
            {isShown && <>
                    <DesignPage design={design} username={username} handleShow={handleShow}/>
                </> }
        </>
    )
}
export default DesignBox;