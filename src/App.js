import logo from './logo.svg';
import './App.css';
import Nabvar from './Page/Nabvar';
import Carosal from './Page/Carosal';
import Carosal2 from './Page/Carosal2';
import Login from './Page/Login';
import { Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Register from './Page/Register';



function App() {
  return (
    <div>
      <Routes>
       <Route path='/'  element={<Register/>} />
       <Route path='/login' element={<Login/>}/>
       <Route path='/home' element={<Home/>}/>
      </Routes>
      {/* <Carosal/> */}
      {/* <Carosal2/> */}
    </div>
  );
}

export default App;
