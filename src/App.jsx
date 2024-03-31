import {Routes,Route } from "react-router-dom"
import Footer from "./Components/Footer.jsx"
import HomePage from "./Pages/HomePage.jsx"
import AboutUs from "./Pages/AboutUs.jsx"
import NotFound from "./Pages/NotFound.jsx"
import Signup from "./Pages/Signup.jsx"
import Signin from "./Pages/Signin.jsx"
import CourseList from "./Pages/Course/CourseList.jsx"
import Contact from "./Pages/Contact.jsx"
import Denied from "./Pages/Denied.jsx"
export default function App() {
 

  return (
       <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/about" element={<AboutUs/>}/>
       <Route path = "/signup" element={<Signup/>}/>
       <Route path="/signin" element={<Signin/>} />
       <Route path="/courses" element={<CourseList/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/denied" element={<Denied/>}  />


       // This is the route  random route accessed by someone  
       <Route path="*" element={<NotFound/>}/>
       </Routes>
  )
}

