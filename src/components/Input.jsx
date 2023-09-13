import "../styles/input.css"


const Input = (props)=>{
    return (
        <div className="textInputWrapper flex flex-col w-full lg:w-[75%]">
            <label className="mb-2 font-bold">{props.title}</label>
            <input placeholder="اكتب هنا" type="text" className="textInput " onChange={props.handleChange} name={props.name} required={props.required || false}/>
        </div>
    )
}

export default Input;