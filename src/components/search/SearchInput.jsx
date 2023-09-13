
import "../../styles/searchInput.css"

const SearchInput = (props)=>{

    return (
        <div className="input-wrapper">
            <input className="input-box" onChange={props.handleChange} type="text" placeholder="ايه الي في دماغك؟"/>
            <span className="underline"></span>
        </div>

    )
}

export default SearchInput