import logo from './logo.svg';
import './App.css';
import Nabvar from './Page/Nabvar';
import Carosal from './Page/Carosal';
import Carosal2 from './Page/Carosal2';
import Login from './Page/Login';
import { Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Register from './Page/Register';
import AddResto from './Page/AddResto';
import FilterCard2 from './Page/FilterCard2';
import Total from './Page/Total';




function App() {
  return (
    <div>
      <Routes>
       <Route path='/'  element={<Register/>} />
       <Route path='/login' element={<Login/>}/>
       <Route path='/home' element={<Home/>}/>
<Route path='/addresto' element={<AddResto/>}/>
<Route path='/filtercard2' element={<FilterCard2/>}/>
<Route path='/total' element={<Total/>}/>
     </Routes>
      {/* <Carosal/> */}
      {/* <Carosal2/> */}
    </div>
  );
}

export default App;
