export const LoaderStatus = (status)=>{
    if ( status ){
        document.querySelector('#loader').style.display = 'flex';
    }
    else{
        document.querySelector('#loader').style.display = 'none';
    }
}