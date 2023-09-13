import Navbar from "../components/navbar/Navbar";
import SearchInput from "../components/search/SearchInput";
import DesignsContainer from "../components/designs/DesignsContainer"
import { useState } from "react"
import { BASE_URL } from "../constants/BASE_BACKEND";

const Search = ()=>{

    const [query, setQuery] = useState("");

    const handleChange = (event)=>{
        setQuery(event.target.value);
    }

    return (
        <div>
            <Navbar/>
            <div className="content bg-white p-0">
                <SearchInput handleChange={handleChange}/>
                <DesignsContainer url={`${BASE_URL}/designs/?query=${query}`}/>
            </div>
        </div>
    )
}

export default Search;