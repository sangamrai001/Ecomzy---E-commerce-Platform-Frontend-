import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from '../components/Product'; 

export default  function Home(){
    const [loading, setloading] = useState(false) ; 
    const [posts , setpost] = useState([]) ; 
    const API_URL = "https://fakestoreapi.com/products";
    async function fetchData(){
        try {
            setloading(true) ; 
            const data = await fetch(API_URL) 
            const res = await data.json() ;
            console.log(res); 
            setpost(res) ; 
            setloading(false); 
        } 
        catch (error) {
             console.log("Error aagya bhai Home.jsx me");
        }
        
    }
    useEffect(()=>{
        fetchData(); 
    },[])
    return (<div>
        {
            loading ? <Spinner/> : 
            posts.length>0 ? (
                <div className="grid xs:grid-col-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] ">

               { posts.map((post)=>(
                    <Product key={post.id} post={post} />
                ))}   

                </div>
            )
            : <div> No posts found</div>

        }
    </div>)
}