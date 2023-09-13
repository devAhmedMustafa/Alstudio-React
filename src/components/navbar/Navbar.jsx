import Logo from "./Logo";
import NavList from "./NavList";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ()=>{

    const login = useNavigate();

    const logout = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        login('/login');
    }

    return (
        <nav className="flex flex-row p-3 items-center justify-between">
            <Logo/>
            <NavList/>
            <section className="text-lg text-white flex gap-2">
                <Link to='/add_design' className="bg-black w-9 h-9 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-plus"></i>
                </Link>
                <Link to='/search' className="bg-black w-9 h-9 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </Link>
                <button onClick={logout} className="bg-[#dd1b1b] w-9 h-9 rounded-full">
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </button>
            </section>
        </nav>
    )
}

export default Navbar;