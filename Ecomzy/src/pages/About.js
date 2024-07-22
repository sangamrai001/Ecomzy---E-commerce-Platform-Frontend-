import { Navigate, useNavigate } from "react-router-dom"


export default function About(){
    const navigate = useNavigate();
    return (<div className="w-2/3 flex flex-col m-auto justify-center item-center">
        <p className="p-10 text-lg font-normal">
            Welcome to our e-commerce platform, inspired by the sleek and efficient design of Ecomzy. We are committed to providing you with a seamless online shopping experience.
             Our website features a comprehensive product catalog, advanced search and filter options, secure payment gateways, 
             and a user-friendly interface. We strive to bring you the best products and services, ensuring a smooth and enjoyable shopping journey.
            <div className="mt-2">
            Thank you for choosing us as your preferred online shopping destination.
            </div>
            </p>
            <div className="w-full flex justify-center">
            <button className="outline text-center w-1/6 border-gray-700 rounded-full hover:bg-gray-600 hover:text-white transition duration-700 p-2 font-normal" onClick={()=> navigate('/')}>
                Continue Shopping
            </button>
            </div>
    </div>)
}