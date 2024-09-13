import data3 from "./data3";
import "./Total.css";
import { MdOutlineDelete } from "react-icons/md";
import Nabvar from "./Nabvar";
import Footer from "./Footer";
import { useStatef } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";








const Total=()=>{
    const [count2 , setCount2] = useState(1);
    const Navigate = useNavigate();
    const handleBurger=()=>{
        Navigate("/filtercard2")
    }
const handleDecres=()=>{
    setCount2(count2-1)
}
const handleIncres=()=>{
    setCount2(count2+1);
}
const handleBackCart=()=>{
    Navigate("/filtercard2")
}
const handleBackHomeCart=()=>{
    Navigate("/home")
}
    return (
        <>
<Nabvar/>
<div className="total-20">
    <h2 onClick={handleBackHomeCart}>Home/</h2>
    <h3 onClick={handleBackCart}>Cart</h3>
</div>
        <div className="total-10">
            <div className="total-15">
        {
            data3.map((item6,index)=>{
                return <div key={item6.id} className="total">
                <div className="total-1"><img src={item6.profile_path}></img></div>
                <div className="total-2"><p onClick={handleBurger} style={{cursor:"pointer"}}>{item6.name}</p><span>Friy Papad</span></div>
                <div><span>Rs {item6.price}</span></div>
                <div  className="total-5"><button onClick={handleDecres}>-</button>{count2}<button onClick={handleIncres}>+</button></div>
                <div className="total-6"><span><MdOutlineDelete /></span></div>
                </div>
            })
        }
        </div>

 <div className="total-7">
<h2>card Total</h2>
<p style={{marginLeft:"15px"}}>Price detales</p>
<div className="total-16"><p>MRP(1 item)</p><span>Rs 125.00</span></div>
<div className="total-17"><p>Delebry Fee</p><span>Rs 10.00</span></div>
<div className="total-18"><p>Discount</p><span>Rs 80.00</span></div><hr></hr>
<div className="total-19"><p>Total Discount</p><span>Rs 130.00</span></div>
<button>Prosced to Buy</button>
 </div>
        </div>
        <Footer/>
        </>
    )
}
export default Total;