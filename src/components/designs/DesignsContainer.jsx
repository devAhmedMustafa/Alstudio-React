import DesignBox from "./DesignBox";
import axios from "axios"
import {useState, useEffect} from "react"
import "../../styles/masonry-grid.css"
import { LoaderStatus } from "../../scripts/Loading";

const DesignsContainer = (props)=>{

    const [designs, setDesigns] = useState([]);
    const [loading, setLoader] = useState(true);

    useEffect(()=>{
        LoaderStatus(loading);
    }, [loading])

    const fetchDesigns = async (url)=>{
        const res = await axios.get(url, {
            headers: {
                'Authorization': `Token ${localStorage['token']}`
            }
        })
        return res;
    }

    useEffect(()=>{

        fetchDesigns(props.url).then((res)=>{
            setDesigns(res.data);
            setLoader(false);
        }).catch((err)=>console.error(err));
        
    }, [props.url])

    return (
        <div className="masonry-grid bg-white rounded-2xl">
            {designs.map((design)=> <DesignBox key={design.uuid} design={design}/>)}
        </div>
    )
}

export default DesignsContainer;