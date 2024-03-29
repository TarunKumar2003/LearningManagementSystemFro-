import { BsPersonCircle } from "react-icons/bs";
import HomeLayout from "../Layouts/HomeLayout";
import { Link, useAsyncError, useNavigate } from "react-router-dom";
import { useState } from "react";
import { handler } from "@tailwindcss/line-clamp";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { createAccount } from "../Redux/Slices/AuthSlice";


export default function Signup(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [signupDetails,setSignupDetails] = useState({
        email:'',
        fullName:'',
        password:'',
        avatar:''
    })
    const [previewImage, setPreviewImage] = useState('');

    function handleUserInput(e){
                const {name, value} = e.target;
                setSignupDatails({
                    ...signupDetails,
                    [name]:value
                })
    }
    function handleImage(e){
                e.preventDefault();
                const uploadedImage = e.target.file[0];
                if(!uploadedImage) return;
                setSignupDatails({
                    ...signupDetails,
                    avatar:uploadedImage
                })
                const fileReader = fileReader();
                fileReader.readAsDataURL("load",()=>{
                    setPreviewImage(this.result);
            })
    }

    async function onFormSubmit(e){
                e.preventDefault();
                console.log(signupDetails);
                if(!signupDetails.email || !signupDetails.password || !signupDetails.fullName ) {
                    toast.error("Please fill all the details");
                    return;
                }
                if(signupDetails.fullName.length < 5) {
                    toast.error("Name should be atleast of 5 characters");
                    return;
                }
                if(!signupDetails.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                    toast.error("Invalid email provided");
                    return;
                }
                if(!signupDetails.password.match(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/)) {
                    toast.error(`Minimum 8 characters ,Maximum 20 characters 
                                 At least one uppercase character 
                                 At least one lowercase character
                                 At least one digit 
                                 At least one special character`);
                                 return;
                }

                const formData = new FormData();
                formData.append("fullName", signupDetails.fullName);
                formData.append("email", signupDetails.email);
                formData.append("password", signupDetails.password);
                formData.append("avatar", signupDetails.avatar);


                const response = await dispatch(createAccount(formData));
                console.log(response);
                if(response?.payload?.success) {
                    navigate("/");
                }
                setSignupDetails({
                    email: '',
                    fullName: '',
                    password: '',
                    avatar: ''
                });
                setPreviewImage("");
    }
    return(
         <HomeLayout>
            <div className="flex overflow-x-auto items-center justify-center h-[100vh] bg-gray-500">
                <form onSubmit={onFormSubmit} noValidate className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
                    <h1 className="text-2xl text-center font-bold">Registration Page</h1>
                    <label htmlFor="image_uploads" className="cursor-pointer">
                        {previewImage? (<img src={previewImage} alt=""  className="w-24 h-24 rounded-full m-auto "/>)
                         :(
                            <BsPersonCircle className="h-24 w-24 rounded-full m-auto"/>
                         )
                         }
                    </label>
                    <input 
                       onChange={handleImage}
                       type="file"
                       className="hidden"
                       name="image-uploads"
                       id="image_uploads"
                       accept=".jpg, .jpeg, .png, .svg"
                       />
                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullName" className="font-semibold">Name</label>
                        <input  
                              onChange={handleUserInput}
                              value={signupDetails.fullName}
                              type="text"
                              name="fullName"
                              required
                              className="bg-transparent px-2 py-1 border"
                              placeholder="enter your name.."
                              id="fullName"
                         />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold"> Email</label>
                        <input 
                               onChange={handleUserInput}
                               value={signupDetails.email}
                               required
                               type="text"
                               name="email"
                               className="bg-transparent px-2 py-1 border"
                               placeholder="enter your Email..."
                               id="email"
                         />

                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold"> Password</label>
                        <input 
                               onChange={handleUserInput}
                               value={signupDetails.password}
                               required
                               type="password"
                               name="password"
                               className="bg-transparent px-2 py-1 border"
                               placeholder="enter your Password..."
                               id="password"
                         />
                    </div>
                    <button className="mt-2 bg-yellow-800 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold text-lg">
                        Create account
                    </button>
                    <p className="text-center">
                         Already have an account ? <Link to="/signin" className="cursor-pointer text-accent">Login</Link>
                    </p>
                </form>
            </div>


         </HomeLayout>
    );
}