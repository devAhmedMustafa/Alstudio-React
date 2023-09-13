import Input from "./Input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = ()=>{

    const [inputs, setInputs] = useState({});
    const login = useNavigate();

    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values=> ({...values, [name]:value}))
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        await axios.post('/api-auth-token/' ,{
            username : inputs['username'],  password: inputs['password']
        })
        .then((res)=>{
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', inputs.username);
            login('/');
        })
        .catch((error)=> {
            document.querySelector('.alert').innerHTML += 'اسم المستخدم او كلمة السر خطأ'
        });
    }

    return (
        <form method="post" className="flex flex-col form gap-4 p-10 items-center" onSubmit={handleSubmit}>

            <h1 className="font-bold text-3xl text-center m-5">تسجيل الدخول</h1>
      
            <Input label="اسم المستخدم" type="text" name="username" handleChange={handleChange}/>
            <Input label="كلمة السر" type="password" name="password" handleChange={handleChange}/>

            <span className="alert text-red font-bold"></span>

            <div className="flex gap-2 items-center">
                
                <button type="submit" className="bg-[#1f1f1f] text-white w-fit text-lg px-6 py-2 rounded-full">سجل الان</button>
                <Link to='/signup' className="bg-[#f5f5f5] text-black w-fit text-lg px-6 py-2 rounded-full border-2 border-black">معندكش حساب؟</Link>

            </div>

        </form>
    )
}

export default LoginForm;