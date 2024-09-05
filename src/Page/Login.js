import { SiAlgorand } from "react-icons/si";
import "./Login.css";
import { useState } from "react";
import {user2} from "../Page/Api";





const Login=()=>{
const [mobile,setMobile] = useState(" ");
const [name,setName] = useState(" ");

const [email,setEmail] = useState(" ");
const [mesage,setMesage] = useState("");


    const onDataSubmit=(e)=>{
        window.location.href="/home"
        e.preventDefault();
        const user = {
            mobile,
            name,
            email
        }
        console.log(user);
        // user2(user)  
        // .then(res=>{
        //     console.log(res.data);
        // })   
        // .catch(err=>{
        //     console.log(err.response.data);
        // })

        
      
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
        <button>Register</button>
        </div>

        <form onSubmit={onDataSubmit}>
            <input onChange={handleMobile} value={mobile} type="text" placeholder="Ener Mobile"></input>
            <input onChange={handleName} value={name} type="text" placeholder="Name"></input>
            <input onChange={handleEmail} value={email} type="text" placeholder="Email"></input>
            <button>Send OTP</button>
        </form>
        <div style={{textAlign:"center", marginTop:"10px", fontWeight:"600", color:"red"}}>{mesage}</div>
        </div>

        <div className="log-4">
<img className="log-img" src="https://akhilamaram.com/wp-content/uploads/2021/07/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash-scaled-e1626760021843.jpg"></img>
        </div>
        </div>
    )
}
export default Login;