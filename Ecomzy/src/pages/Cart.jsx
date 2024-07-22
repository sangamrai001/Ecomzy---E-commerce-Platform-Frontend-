import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
 import CartItems from '../components/Carttems';
import { useEffect, useState } from 'react';


export default function Cart() {
    const {cart} = useSelector((state) => state);
    const [amount, setamount] = useState(0);
    useEffect(() => {
        setamount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart])
    return (<div className='w-full flex justify-center'>
        <div className=' w-full  flex justify-center'>
            {
                (cart.length <= 0 )?
                    (<div>
                        <div> Your Cart is Empty</div>
                        
                        <button>
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
                                </div>
                                </div>
                                
                                
                            </div>
                            
                        </div>

                    )
            }
        </div>
    </div>)
}