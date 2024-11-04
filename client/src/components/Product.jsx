import { useDispatch, useSelector } from "react-redux"
import toast, { Toaster } from 'react-hot-toast';
import { add, remove } from "../redux/slices/NewSlices";

      
 export default function Product({post}){
        const {cart} = useSelector((state)=> state) ; 
        const dispatch = useDispatch() ; 
        
        function addHandler(){
            dispatch(add(post))  
            toast.success("Item added to Cart")
        }
        function removeHandler(){
            dispatch(remove(post.id))
            toast.error("Item removed to Cart")
        }

        return (
            <div className="flex flex-col items-center hover:scale-110 transition duration-300 ease-in shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  rounded-xl p-4 gap-3 mt-10 ml-15 justify-between ">
                <div>
                    <p className="text-gray-700 font-semibold text-lg text-left truncate mt-1 w-40   ">
                        {post.title.split(" ").slice(0,3).join(" ") +"..."}
                    </p>
                </div>
                <div className="w-40 text-gray-400 font-normal text-[10px] ">
                    {post.description.split(" ").slice(0,10).join(" ")+"..."}
                </div>
                <div>
                    <img height={100} width={100} src={`${post.image}`}>
                    </img>
                </div> 
                <div className="flex justify-between gap-5 item-center w-full mt-4 " >
                    <div className="text-green-600 font-semibold">
                        <span> ${post.price}</span>  
                            
                    </div>  
                    <div>
                        { 
                                    cart.some((p)=>p.id===post.id ) ? <div>
                                        <button  className="text-[9px] text-gray-700 border-2 border-gray-700 rounded-full rounded-full p-2 hover:bg-gray-700  hover:text-white transition duration-300 ease-in" onClick={removeHandler}>REMOVE ITEM</button>
                                    </div> : <div> <button onClick={addHandler}><div className="text-[9px] text-gray-700 border-2 border-gray-700 rounded-full rounded-full p-2  hover:bg-gray-700  hover:text-white transition duration-300 ease-in">
                                    ADD TO CART</div></button> </div>
                                    
                        }
                    </div>
                </div>
               
              
            </div>
            
        )
 }