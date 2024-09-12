import "./Carosal.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import data from "./data";
import data2 from "../data2";






const Carosal=()=>{
    return (
        <div className="cars-1">
<div className="cars-2" ><GrPrevious /></div>
<div className="cars-img">
{
  data2.map((item2)=>{
    return <img src={item2.profile_path}></img>
  })
}
</div>
<div className="cars-2"><GrNext /></div>
        </div>
    )
}
export default Carosal;