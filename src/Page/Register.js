import { SiAlgorand } from "react-icons/si";
import "./Register.css";
import { useState } from "react";
// import {user2} from "../Page/Api";
import { useNavigate } from "react-router-dom";
import Nabvar from "./Nabvar";






const Register=()=>{
const [mobile,setMobile] = useState(" ");
const [name,setName] = useState(" ");

const [email,setEmail] = useState(" ");
const navigate = useNavigate();


    const onDataSubmit=(e)=>{
        e.preventDefault();
        const user = {
            mobile,
            name,
            email
        }
        console.log(user);
    }


    const handleHistoryHook=()=>{
        navigate("/login")
    }
   

    const handleEmail=(e)=>{
setEmail(e.tarrget)

    }
    const handleMobile=(e)=>{
        setMobile(e.target.value)
    }
    const handleName=(e)=>{
        setName(e.target.value)
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
        <button onClick={handleHistoryHook} >Login</button>
        <button >Register</button>
        </div>

        <form onSubmit={onDataSubmit}>
            <input onChange={handleMobile} value={mobile} type="text" placeholder="Ener Mobile"></input>
            <input onChange={handleName} value={name} type="text" placeholder="Name"></input>
            <input onChange={handleEmail} value={email} type="text" placeholder="Email"></input>
            <button onClick={handleHistoryHook} >Send OTP</button>
        </form>
        <div style={{textAlign:"center", marginTop:"10px", fontWeight:"600", color:"red"}}></div>
        </div>

        <div className="log-4">
<img className="log-img" src="https://akhilamaram.com/wp-content/uploads/2021/07/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash-scaled-e1626760021843.jpg"></img>
        </div>
        </div>
        </>
    )
}
export default Register;