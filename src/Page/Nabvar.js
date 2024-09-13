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
import { useState } from "react";
import data from "./data";








const Nabvar=({})=>{
const [click , setClick] = useState(0);
const handleShowData=()=>{
    setClick(click+1);
}
const handleAddResto=()=>{
    navigate("/addresto")
}



const navigate = useNavigate();
const handleCart1=()=>{
    navigate("/filtercard2")
}
const navLogin=()=>{
    navigate("/login")
}
const navRegister=()=>{
    navigate("/")
}
const handleHomeExit=()=>{
    navigate("/home")
}





    return(
        <div className="nav-1">
            <span><IoFastFoodOutline /></span>
            <div>
            <h1 onClick={handleHomeExit}>AlPHA</h1>
            <p>FOOD PLATINUM</p>
            </div>
<div className="nav-2">
    <input   placeholder="Location Search" type="text"></input> |
    <span><CiSearch /></span>
    <input placeholder="Search Restorant" type="text"></input>
</div>

<div className="nav-3">
<span><GrRestaurant /></span>
<p onClick={handleAddResto}>Add Restaurant</p>
</div>

<span style={{color:"black", fontSize:"22px"}}><FiShoppingCart /></span>
<span onClick={handleCart1} style={{color:"black", cursor:"pointer",fontSize:"15px"}}>Cart</span>
<span onClick={navLogin} style={{color:"black", fontSize:"15px", cursor:"pointer"}}>LogIn</span>
<span onClick={navRegister} style={{color:"black", fontSize:"15px",cursor:"pointer"}}>Register</span>

        </div>

        
    )
}
export default Nabvar;