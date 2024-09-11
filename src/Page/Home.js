import Carosal from "./Carosal";
import Carosal2 from "./Carosal2";
import Nabvar from "./Nabvar";
import Card from "./Card";
import FilterCard from "./FilterCard";
import Footer from "./Footer";
import "./Home.css";









const Home=()=>{
    return (
        <div>
            <div className="nabvar-15" ><Nabvar/></div>
<Carosal2/>
<Card/>
<FilterCard/>
<Footer/>
        </div>
    )
}
export default Home;