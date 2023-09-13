
const Input = (props)=>{
    
    return (
        <section className="flex flex-col gap-2 w-full">
            <label className="font-bold text-xl">{props.label}</label>
            <input className="px-5 py-2 text-white bg-[#1f1f1f] focus:outline-white rounded-full shadow-2xl" type={props.type} name={props.name} onChange={props.handleChange} required/>
        </section>
    )
}

export default Input;