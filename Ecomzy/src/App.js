import './App.css';
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App flex flex-col  w-full h-full ">
      <div className=' bg-slate-900'>
      <Navbar/>
      </div>
      
      <Routes>
         
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
       

      </Routes>

    </div>
  );
}

export default App;
