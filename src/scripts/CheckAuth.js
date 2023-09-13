import axios from "axios"

export const checkAuth = async ()=>{
    const res = await axios.get('/account/get-details/', {
        headers:{
            Authorization: `Token ${localStorage['token']}`
        }
    })

    return res;
}