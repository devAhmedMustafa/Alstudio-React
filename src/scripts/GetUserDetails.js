import axios from "axios"

export const GetUser = async ()=>{
    const res = await axios.get("/account/get-details/", {
        headers:{
            'Authorization': `Token ${localStorage['token']}`
        }
    })
    
    return res;
}