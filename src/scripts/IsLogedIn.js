export const LogedIn = ()=>{
    if ( localStorage["token"] === undefined ){
        return false;
    }
    else{
        return true;
    }
}