import './App.css';
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Payment from './pages/Payment' ; 

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
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/payment' element={<Payment/>}/>
       

      </Routes>
      <div className='mt-8 w-full  bg-slate-900'>
          <Footer/>
      </div>
     

    </div>
  );
}

export default App;
