import "./CreatForm.css";
import Nabvar from "./Nabvar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";







const CreatForm=()=>{
    const navigate = useNavigate()
    const handleCreatForm=()=>{
        navigate("/home")
    }
    const handleCreatCart=()=>{
        navigate("/filtercard2")
    }
    return (
        <div>
           <Nabvar/>
           <div className="CreatForm-1"><h2 onClick={handleCreatForm}>Home/</h2><h3 onClick={handleCreatCart}>Cart/</h3><h4>Catogary</h4></div>
           <div className="creatform-2">
            <div className="creatform-3"><p>1</p><span>Restaurant informatiun</span></div>
            <div className="creatfrom-4"></div>
            <div className="creatform-3"><p>2</p><span>Restaurant type</span></div>
            <div className="creatfrom-4"></div>
            <div className="creatform-3"><p>3</p><span>Upload image</span></div>
            <div className="creatfrom-4"></div>
            <div className="creatform-3"><p>4</p><span>Upload doccumet</span></div>
            <div className="creatfrom-4"></div>
            <div className="creatform-3"><p>5</p><span>Sucesful</span></div>
           </div>
           <Footer/>
        </div>
    )
}
export default CreatForm;