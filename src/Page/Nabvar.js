import "./Nabvar.css";
import { IoFastFoodOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { GrRestaurant } from "react-icons/gr";
import { FiShoppingCart } from "react-icons/fi";
import Carosal2 from "./Carosal2";
import Carosal from "./Carosal";
// import Carosal from "./Carosal";
import { useNavigate } from "react-router-dom";







const Nabvar=({handleAddCart})=>{
const navigate = useNavigate();
const navLogin=()=>{
    navigate("/login")
}
const navRegister=()=>{
    navigate("/")
}





    return(
        <div className="nav-1">
           
            <span><IoFastFoodOutline /></span>
            <div>
            <h1>AlPHA</h1>
            <p>FOOD PLATINUM</p>
            </div>
<div className="nav-2">
    <span style={{}}><CiLocationOn /></span>
    <input   placeholder="Location Search" type="text"></input> |
    <span><CiSearch /></span>
    <input placeholder="Search Restorant" type="text"></input>
</div>

<div className="nav-3">
<span><GrRestaurant /></span>
<p>Add Restaurant</p>
</div>

<span style={{color:"black", fontSize:"22px"}}><FiShoppingCart /></span>
<strike>{2}</strike>
<span style={{color:"black", fontSize:"15px"}}>Cart</span>
<span onClick={navLogin} style={{color:"black", fontSize:"15px", cursor:"pointer"}}>LogIn</span>
<span onClick={navRegister} style={{color:"black", fontSize:"15px",cursor:"pointer"}}>Register</span>

        </div>

        
    )
}
export default Nabvar;