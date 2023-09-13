import { Link } from "react-router-dom";

const NavList = ()=>{

    return (
        <div>
            <ul className="gap-10 hidden font-bold md:flex">
                <li><Link to="/">الصفحة الرئيسية</Link></li>
                <li><Link to={`/profile/${localStorage['username']}`}>البروفايل</Link></li>
                <li><Link to='/favourites'>المفضلة</Link></li>
            </ul>
        </div>
    )
}

export default NavList;