import { FcDeleteDatabase } from "react-icons/fc";
import { remove } from "../redux/slices/NewSlices";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
export default function CartItems({items, index}){
    const dispatch = useDispatch() ; 
    
    function removeHandler(){
        dispatch(remove(items.id) ) 
        toast.error("Item removed from cart")
           
        
    }
    return (
        
        <div className=" w-full flex justify-center">
            <div className="w-2/3 flex flex-col justify-center">
                <div >
                    
                    <img width={120} height={120}  src={items.image} alt="No image"></img>
                </div>
                <div>
                    <h1 className="text-gray-700 font-semibold text-md text-left m-2">
                        {items.title}
                    </h1>
                    <h2 className=" text-gray-400 font-normal text-[10px] w-full">
                        {items.description.split(" ").slice(0,15).join(" ") +"..."}
                    </h2>
                    <div className="flex justify-between mt-2 pr-16 items-center">
                    
                    <p className="text-green-600 text-md"> ${items.price} </p>
                    <div>
                        <button onClick={removeHandler}>
                        <FcDeleteDatabase className="size-6" />
                        </button>
                    </div>
                    </div>
                    
                </div>
            </div>
            

           

        </div>
    )
}