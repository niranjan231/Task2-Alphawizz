import "./FilterCard.css";
import data from "./data";
import { CiLocationOn } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";







const FilterCard=()=>{
    const navigate = useNavigate();
    const handleBackBtn=()=>{
        navigate("/filtercard2")
    }

    console.log(data);
    return(
        <div className="filter-10">
        <div className="filter-11">
            <div className="filter-12">
            <h1>Restorant</h1>
            <p>Here's an interesting job that </p>
            </div>
            <div filter-13>
                <button className="filter-btn1">Veg & non Veg</button>
                <button className="filter-btn2">veg</button>
                <button className="filter-btn3">Non veg</button>
            </div>
        </div>


<div className="filter-17">
{
    data.map((item1)=>{
return  <div onClick={handleBackBtn} className="filter-14">
<div>
    <img src={item1.profile_path}></img>
</div>
<div className="filter-15">
    <div className="filter-16">
    <h3>{item1.name}</h3>
    <p><FaRegStar /></p>
    </div>
</div>
<div>
    <p>(veg Non veg Restorant)</p>
</div>
<div className="filter-18">
<CiLocationOn />{item1.location}
</div>
</div>


    })
}
</div>


        </div>
    )
}
export default FilterCard;