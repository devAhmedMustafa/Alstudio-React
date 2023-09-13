import { BASE_URL } from "../../constants/BASE_BACKEND";
import LoveBtn from "./loveBtn";

const DesignPage = (props)=>{

    const design = props.design;
    const username = props.username;

    const handleShow = (event)=>{
        document.querySelector('.port').style.display = 'none';
    }

    return (
        <div className="bg-[#131313af] fixed z-10 top-0 left-0 w-screen h-screen p-12 md:p-20 port overflow-auto">
            <button onClick={handleShow} className="absolute text-4xl top-5 right-5 text-gray"><i className="fa-solid fa-xmark"></i></button>
            <div className="h-fit flex flex-col p-10 bg-white gap-8">

                <div className="flex justify-between items-center">
                    <h1 className="text-sm flex gap-1 items-center md:text-2xl">
                        <i className="fa-solid fa-circle-user"></i>
                        <span className="font-semibold">{username}</span>
                    </h1>
                    <h1 className="text-sm md:text-2xl">{design.title}</h1>   
                    <div className="relative w-10 h-10"><LoveBtn design={design.uuid}/> </div>
                </div>
                
                <div className="flex justify-center rounded-xl max-h-[700px]"><img className="object-contain w-full" src={`${BASE_URL}${design.img}`} alt="" /></div>

                <p>{design.desc}</p>
                <div className="text-[#707070]">
                    <span>تاريخ النشر  - {design.publish_date}</span>
                </div>
            </div>
        </div>
    )
}

export default DesignPage