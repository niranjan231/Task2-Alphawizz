import "./FilterCard2.css";
import { CiStar } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import data from "./data";
import { useNavigate } from "react-router-dom";
import Nabvar from "./Nabvar";
import Footer from "./Footer";







const FilterCard2=()=>{ 
    const navigate = useNavigate()
    const handleHomeBtn=()=>{
        navigate("/home")
    }
    return (
        <>
        <Nabvar/>
        <div className="card2-20"><h2 onClick={handleHomeBtn}>Home</h2></div>
        <div className="card2-5">
       {
        data.map((item3)=>{
            return   <div className="card2-1">
            <div><img src={item3.profile_path}></img></div>
                        <div className="card2-2"><h4>{item3.name}</h4><span><CiStar /></span></div>
                        <div className="card2-3"><p>RS {item3.price}</p> <h5><IoCartOutline />Add to cart</h5></div>
                     </div>
        })
       }
        </div>
        <Footer/>
        </>
    )
}
export default FilterCard2;