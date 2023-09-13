import axios from "axios";
import { useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import "../../styles/changePhotos.css";
import {checkAuth} from "../../scripts/CheckAuth";
import default_cover from "../../assets/default_cover.jpg"
import default_profile from "../../assets/profile-circle-icon-2048x2048-cqe5466q.png";
import {BASE_URL} from "../../constants/BASE_BACKEND"

const UserPP = ()=>{
    const [pp, setPp] = useState("");
    const [cover, setCover] = useState("");
    const [isAuthenticated, setAuth] = useState(false);
    const {username} = useParams("username")

    const handlePP = (e)=>{
        const file = e.target.files[0];
        axios.patch(`/account/user_profile/${localStorage['username']}/`, {
            profile_pic: file,
        }, {
            headers: { 
                'Content-Type': 'multipart/form-data',
                'Authorization': `Token ${localStorage['token']}`
            }
        }).then((res)=> setPp(URL.createObjectURL(file))).catch((err)=>console.error(err.response))
    }

    const handleCover = (e)=>{
        const file = e.target.files[0];
        axios.patch(`/account/user_profile/${localStorage['username']}/`, {
            profile_cover: file,
        }, {
            headers: { 
                'Content-Type': 'multipart/form-data',
                'Authorization': `Token ${localStorage['token']}`
            }
        }).then((res)=> setCover(URL.createObjectURL(file))).catch((err)=>console.error(err.response))
    }

    useEffect(()=>{

        checkAuth().then((res)=>{
            if ( res.data.username == username ){
                setAuth(true);
            }
        }).catch((err)=>console.error(err));

        axios.get(`/account/user_profile/${username}`,{
            headers:{
                'Authorization': `Token ${localStorage['token']}`
            }
        }).then((res)=>{
            setPp(`${BASE_URL}${res.data.profile_pic}`);

            if(res.data.profile_pic == null){
                setPp(default_profile)
            }
            else{
                setPp(`${BASE_URL}${res.data.profile_cover}`);
            }

            if(res.data.profile_cover == null){
                setCover(default_cover)
            }
            else{
                setCover(`${BASE_URL}${res.data.profile_cover}`);
            }
        }).catch((err)=>{
            console.error(err);
        });

    }, [])

    

    return (
        <div className="w-full relative h-[120px] md:h-[250px] overflow-hidden">
            
            <div className="w-full display-edit">
                <img src={cover} alt="" className="w-full object-cover"/>

                {isAuthenticated && 
                <><label htmlFor="pcover" className="absolute w-full h-full top-0 left-0 bg-[#1b1b1ba2] items-center justify-center gap-1 text-white hidden cursor-pointer">غير الصورة<i className="fa-solid fa-panorama"></i></label><input id="pcover" type="file" className="hidden" name="cover" onChange={handleCover}/></>
                }
            </div>
            

            <div className='rounded-full absolute left-5 bottom-0 border-[#20202069] border-2 overflow-hidden display-edit'>
                <img src={pp} alt="Profile Pic" className="h-20 object-cover w-20 md:w-[140px] md:h-[140px]" />

                {isAuthenticated &&
                <><label htmlFor="pp" className="absolute w-full h-full top-0 left-0 bg-[#1b1b1ba2] items-center justify-center gap-1 text-white hidden cursor-pointer">غير الصورة<i className="fa-regular fa-image"></i></label><input id="pp" type="file" className="hidden" name="pp" onChange={handlePP} /></>
                }
            </div>
        </div>
    )

}

export default UserPP;