import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';
 import CartItems from '../components/Carttems';
import { useEffect, useState } from 'react';



export default function Cart() {
    const {cart} = useSelector((state) => state);
    const navigate = useNavigate();
    const [amount, setamount] = useState(0);
    useEffect(() => {
        setamount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart])
    return (<div className='w-full flex justify-center'>
        <div className=' w-full  flex justify-center'>
            {
                (cart.length <= 0 )?
                    (<div className='flex flex-col  h-full justify-center mt-10'>
                        <div className='text-3xl font-semibold text-gray-700 '> Your Cart is Empty</div>
                        
                        <button className=' ml-auto mr-auto mt-5 outline rounded-full border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition duration-700 p-1 w-1/2'>
                            <NavLink to='/'> Shop Now </NavLink>
                        </button>
                    </div>
                    ) :
                    (
                        <div className='flex justify-center w-2/3 h-full m-5'>
                           
                            <div className='' >
                                {cart.map((items,index) => (
                                     <div >
                                        
                                        <CartItems items={items}/>
                                        {
                                            index===cart.length-1?(<div></div>):(<div className=" w-10/12 h-[1px] bg-black m-5"> </div>)
                                        }

                                     </div>
                                
                                ))
                                    
                                }
                            </div>
                            <div className='w-1/2 flex flex-col text-center mt-10'> 
                                
                                <div >
                                <div> 
                                    <p className='text-gray-700 font-semibold text-lg mt-5'>Your Cart</p>
                                    <p className='text-green-600 font-semibold text-5xl'>Summary</p>
                                </div>
                                <div className=' mt-10'>
                                    <p>Total items : {cart.length}</p>
                                    <div >
                                    Total amount:
                                    
                                    <span className='text-green-600 ml-1'>
                                          ${amount}
                                    </span>
                                </div>
                                <div className='mt-10' > <button className='outline  font-semibold rounded-full p-2 transition duration-500 hover:bg-green-600 hover:text-white' onClick={()=>{
                                    navigate('#')
                                }} >CHECKOUT NOW</button></div>
                                </div>
                                </div>
                                
                                
                            </div>
                            
                        </div>

                    )
            }
        </div>
    </div>)
}