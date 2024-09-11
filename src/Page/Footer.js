import "./Footer.css";
import { MdOutlineNoFood } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";







const Footer=()=>{
    return (
        <div className="footer">
           <div className="footer-1">
            <div className="footer-4">
<span><MdOutlineNoFood /></span>
<h2>ALPHA</h2>
</div>

<div className="footer-2">
< FaInstagramSquare style={{width:"40", height:"40px", marginRight:"20px", cursor:"pointer"}} />
<FaYoutube style={{width:"40", height:"40px", marginLeft:"20px",cursor:"pointer"}} />
<CiTwitter style={{width:"40", height:"40px", marginLeft:"20px",cursor:"pointer"}} />
</div>
</div>

<div className="footer-6">
<div className="footer-7">
    <h5>For Restaurant</h5>
    <ul>
        <li>Partner with us</li>
        <li>Apps for You</li>
    </ul>
</div>
<div className="footer-7">
    <h5>Learn more</h5>
    <ul>
        <li>Tearms and condition</li>
        <li>Privacy policy</li>
        <li>Refund and cancilation</li>
        <li>Refund policy</li>
        <li>Shopping policy</li>
    </ul>
</div>
<div className="footer-7">
    <h5>About ALPHA FOOD</h5>
    <ul>
        <li>About us</li>
        <li>content us</li>
        <li>My Acount</li>
    </ul>
</div>
<div className="footer-7">
    <h5>Download ALPHA Food Platinum</h5>
    <ul>
        <li>About us</li>
        <li>content us</li>
        <li>My Acount</li>
    </ul>
</div>
</div>

        </div>
    )
}
export default Footer;