import { CiShoppingCart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import logo from './logo.png';
import { useSelector } from "react-redux";

export default  function Navbar(){
    const {cart} = useSelector((state)=>(state)) ; 
    
    return (<div >
        
       <div className="flex justify-between  items-center h-20 max-w-5xl m-auto">
       <div >
            <NavLink to='/'>
            <img className="h-14" src={logo} alt="logo" />
            </NavLink>
            
       </div>
        
       
       <div  className="flex flex-row font-medium mr-5 text-white">
        <NavLink to='/'>
            <div className="text-md mr-10"> 
                Home
            </div>
        </NavLink>
        <NavLink to='/about'>
            <div className="text-md mr-10"> 
                About Us
            </div>
        </NavLink>
        <NavLink to='/contact'>
            <div className="text-md mr-16"> 
                Contact
            </div>
        </NavLink>
        <div  className="relative" >
      
        
        <NavLink to='/cart'  > 
           <div className="text-2xl">
           < CiShoppingCart />
           </div>
            {
                cart.length>0?<div className=  "absolute -top-1 -right-2  bg-green-600 text-xs w-5 h-5 flex justify-center item-center p-0.5 animate-bounce rounded-full text-white">{cart.length}</div>:<div></div>
            }
            
               
                
        </NavLink>
        
       
        
       </div>
       </div>

      
       </div>
    </div>)
}