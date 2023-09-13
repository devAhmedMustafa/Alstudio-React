import { useState, useEffect } from "react";
import Input from "../Input";
import "../../styles/Btn.css";
import axios from 'axios'
import {v4 as uuid4} from "uuid"
import { GetUser } from "../../scripts/GetUserDetails";
import {useNavigate} from "react-router-dom";
import { LoaderStatus } from "../../scripts/Loading";
import imageCompression from "browser-image-compression"

const AddDesignForm = ()=>{

    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState();
    const [navigate, setNavigate] = useState(false);
    const [loading, setLoader] = useState(false);
    const profile = useNavigate();

    useEffect(()=>{
        LoaderStatus(loading);
    }, [loading])

    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values=> ({...values, [name]:value}))
    }

    const handleFile = (e)=>{
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleSubmit = async (event)=>{
        setLoader(true);
        event.preventDefault();
        const userDet = await GetUser();
        const artist = userDet.data.id;
        await axios.post("/designs/", {
            title: inputs.title,
            uuid: uuid4(),
            img: event.target.upload.files[0],
            artist: artist,
            desc: inputs.desc
        }, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Token ${localStorage["token"]}`,
            }
        }).then((res)=>{
            profile(`/profile/${localStorage['username']}`)
        })
        .catch((err)=> console.error(err));
    }

    return (
        <form method="post" className="flex flex-col md:flex-row gap-5 bg-white p-4" onSubmit={handleSubmit}>
            <div className="flex items-center flex-col gap-4 md:max-w-[50%]">
                <div className="relative">
                    <img src={file} alt="" id="img"/>
                </div>
                
                <label htmlFor="upload" className="Btn">ارفع الصورة<i className="fa-solid fa-cloud-arrow-up"></i>
                </label>
                <input type="file" className="hidden" accept=".png .jpg .jpeg" onChange={handleFile} name="img" id="upload" required/>
            </div>
            <div className="lg:w-[50%]">
                <Input title="*اسم التصميم" handleChange={handleChange} name="title" required={true}/>
                <Input title="الوصف" handleChange={handleChange} name="desc"/>
                <button className="bg-green py-2 px-4 rounded-full text-white" type="submit">اضف التصميم</button>
            </div>
        </form>
    )
}

export default AddDesignForm;