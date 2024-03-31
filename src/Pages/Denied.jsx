 import { useNavigate } from "react-router-dom"

export default function Denied(){
    const navigate = useNavigate();
    return(
        <main className="h-screen w-full flex flex-col items-center justify-center bg-[#1A2238]">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">
                403   {/*403 means  content not authorized for you */}
            </h1> 
            <div className="bg-black text-white px-2 text-sm rotate-12 absolute">
                 Access denied
            </div>
            <button onClick={()=>navigate(-1)} className="mt-5 bg-white p-5 rounded text-2xl">
                Go Back
            </button>
        </main>
    )
}