import HomeLayout from "../Layouts/HomeLayout"
import { useState } from "react"
import toast from "react-hot-toast";
import { isEmail } from "../helper/regexMatcher";
import axiosInstance from "../helper/axiosInstance";
function Contact() {
   
    const [userInput,setUserInput] = useState({
        name:'',
        email:'',
        message:''
    });
    
    function handleInputChange(e){
        const {name, value} = e.target;
        console.log(name, value);
        setUserInput({
            ...userInput,
            [name]:value
        })
    }

    async function onFormSubmit(e){
        e.preventDefault();
        if(!userInput.email || !userInput.name || !userInput.message){
            toast.error("All fields are required ");
            return 
        }

        if(!isEmail(userInput.email)){
            toast.error('Invalid Email');
            return;
        }

        try {
            const response = axiosInstance.post("/contact",userInput);
            toast.promise(response, { 
                loading:"Submitting your message...",
                success:'Form submitted Successfully',
                error:"Failed to submit the form"
            })
            const contactResponse = await response;
            if(contactResponse?.data?.success){
                setUserInput({
                    name:'',
                    email:'',
                    message:''
                })
            }

        } catch (error) {
            toast.error("Opertion Failed...")
        }
    }
     
  return (
       <HomeLayout>
           <div className="flex items-center justify-center h-[100vh] bg-gray-500">
                <form onSubmit={onFormSubmit}noValidate className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[22rem]">
                    <h1 className="text-3xl font-semibold">Contact Form</h1>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="name" className="text-xl">Name</label>
                        <input 
                        type="text" 
                        className="bg-transparent border px-2 py-1 rounded-sm"
                        id="name" 
                        name = "name"
                        placeholder="Enter your name.."
                        onChange={handleInputChange}
                        value={userInput.name}
                        />
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="email" className="text-xl">Email</label>
                        <input 
                        type="text" 
                        className="bg-transparent border px-2 py-1 rounded-sm"
                        id="email" 
                        name = "email"
                        placeholder="Enter your email.."
                        onChange={handleInputChange}
                        value={userInput.email}
                        />
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="message" className="text-xl">Message</label>
                        <textarea  
                        className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40"
                        id="mess" 
                        name = "message"
                        placeholder="Enter your email.."
                        onChange={handleInputChange}
                        value={userInput.message}
                        />
                    </div>
                    <button  type="submit"
                    className="bg-yellow-600 w-full hover:bg-yellow-400 cursor-pointer transition-all ease-in-out duration-300 py-2 rounded-lg text-lg">
                        Submit
                    </button>
                </form>
           </div>

       </HomeLayout>
  )
}

export default Contact
