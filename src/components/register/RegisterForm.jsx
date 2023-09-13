import Input from "./Input";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const RegisterForm = ()=>{

    const [inputs, setInputs] = useState({});
    const home = useNavigate();

    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values=> ({...values, [name]:value}))
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        await axios.post('/account/register/' ,inputs)
        .then((res)=>{
            axios.post('/api-auth-token/' ,{
            username : inputs['username'],  password: inputs['password']
            })
            .then((res)=>{
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('username', inputs.username);
                home('/');
            })
        })
        .catch((error)=> {console.log(error)});

    }

    return (
        <form method="post" className="flex flex-col form gap-4 p-10 items-center" onSubmit={handleSubmit}>

            <h1 className="font-bold text-3xl text-center m-5">اعمل اكونت</h1>

            <Input label="اسمك" type="text" name="first_name" handleChange={handleChange}/>
            <Input label="اسمك الاخير" type="text" name="last_name" handleChange={handleChange}/>       
            <Input label="اسم المستخدم" type="text" name="username" handleChange={handleChange}/>
            <Input label="الايميل" type="text" name="email" handleChange={handleChange}/> 
            <Input label="كلمة السر" type="password" name="password" handleChange={handleChange}/> 
            <Input label="اكد كلمة السر" type="password" name="password2" handleChange={handleChange}/> 

            <div className="flex gap-2 items-center">
                
                <button type="submit" className="bg-[#1f1f1f] text-white w-fit text-lg px-6 py-2 rounded-full">سجل الان</button>
                <Link to='/login' className="bg-[#f5f5f5] text-black w-fit text-lg px-6 py-2 rounded-full border-2 border-black">عندك حساب؟</Link>

            </div>

        </form>
    )
}

export default RegisterForm;