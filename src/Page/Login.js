import { SiAlgorand } from "react-icons/si";
import "./Register.css";
import { useState } from "react";
// import {user2} from "../Page/Api";
import { useNavigate } from "react-router-dom";
import Nabvar from "./Nabvar";






const Login=()=>{
    const [mobile , setMobile] = useState("")
    const [err , setErr] = useState("  ")
    const handleInputMobile=(e)=>{
setMobile(e.target.value);
if(mobile.length<10){
   
}

    }
const handleSubmitFormData=(e)=>{
    e.preventDefault()
    const user2 = {mobile}
    console.log(user2);
}





const navigate = useNavigate();
const goRegister=()=>{
    navigate("/")
}
const handleLogin=()=>{
// navigate("/home")
}


    return (
        <>
        <Nabvar/>
        <div className="login">
        <div className="log">
        <div className="log-1">
            <span><SiAlgorand /></span>
            <div className="log-2">
                <h1>ALPHA</h1>
                <p>FOOD PLATINUM</p>
            </div>
        </div>

        <h2>Welcome Back</h2>
        <p>Enter Your Mobile Number</p>

        <div className="log-3">
        <button>Login</button>
        <button onClick={goRegister} >Register</button>
        </div>

        <form onSubmit={handleSubmitFormData} >
            <input style={{marginTop:"80px", position:"relative"}} onChange={handleInputMobile} value={mobile} type="text" placeholder="Mobile Number"></input>
            <button onClick={handleLogin} style={{marginTop:"200px", position:"absolute"}} >Send OTP</button>
        </form>
        <div style={{textAlign:"center", marginTop:"10px", fontWeight:"600", color:"red"}}></div>
        </div>

        <div className="log-4">
<img className="log-img" src="https://akhilamaram.com/wp-content/uploads/2021/07/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash-scaled-e1626760021843.jpg"></img>
        </div>
        </div>
        <div>{err}</div>
        </>
    )
}
export default Login;