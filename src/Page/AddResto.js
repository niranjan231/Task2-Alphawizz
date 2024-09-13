import "./AddResto.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import Nabvar from "./Nabvar";
import { FiAlignRight } from "react-icons/fi";
import { GiScooter } from "react-icons/gi";
import { FaBorderAll } from "react-icons/fa";
import Footer from "./Footer";
import Carosal2 from "./Carosal2";
import { useNavigate } from "react-router-dom";












const AddResto=()=>{
    const navigate = useNavigate()
    const handleGoNext=()=>{
        navigate("/creatform")
    }
    return (
        <>
            <Nabvar/>
           <div className="addresto-carosal">
            <button onClick={handleGoNext}>Register your Restaurant</button>
           </div>
        <div className="addresto">
        <div className="addresto-1">
          <div className="addresto-2">
            <h3>get started with</h3>
            <h3>online ordering</h3>
            <p>plese keep the doccument ready</p>
          </div>
          <div className="addresto-3">
<h5><AiOutlineCopyrightCircle className="card1111" />FSSAI licanse copy</h5>
<h5><AiOutlineCopyrightCircle />your Restaurant menu</h5>
<h5><AiOutlineCopyrightCircle />bank acount detales</h5>
          </div>
          <div className="addresto-4">
          <h5><AiOutlineCopyrightCircle />Regular GSTIN number</h5>
          <h5><AiOutlineCopyrightCircle />PAN card copy</h5>
          <h5><AiOutlineCopyrightCircle />Dish image for  five item</h5>
          </div>
        </div>
        </div>




<div className="addresto-5">
    <div className="addresto-6">
    <h2>Why should you partner with</h2>
    <h2>jetester india ?</h2>
    <p>jester india enables you to get 60% more revinue 10x costumer and boost your brand</p>
    </div>

    <div className="addresto-7">
        <div className="add-8"><span><CiLocationOn /></span><h4>100+ city in india</h4></div>
        <div className="add-9"><span><IoHomeOutline /></span><h4>3 lakh+ Restaurant</h4></div>
        <div className="add-10"><span><IoBagOutline /></span><h4>5.0 crore+ monthly</h4></div>
    </div>
</div>





<div className="add-11">
    <h1>how it work</h1>
    <div className="add-15">
    <div className="add-12"><span><FiAlignRight /></span><h2>step 1</h2><p>creat your page</p></div>
    <div className="add-13"><span><GiScooter /></span><h2>step 2</h2><p>create your page</p></div>
    <div className="add-14"><span><FaBorderAll /></span><h2>step 3</h2><p>create your page</p></div>
    </div>
</div>
<Footer/>
        </>
    )
}
export default AddResto;