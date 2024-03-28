import {Routes,Route } from "react-router-dom"
import Footer from "./Components/Footer.jsx"
import HomePage from "./Pages/HomePage.jsx"
import AboutUs from "./Pages/AboutUs.jsx"
import NotFound from "./Pages/NotFound.jsx"
import Signup from "./Pages/Signup.jsx"
export default function App() {
 

  return (
       <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/about" element={<AboutUs/>}/>
       <Route path = "/signup" element={<Signup/>}/>
       <Route path="*" element={<NotFound/>}/>
       </Routes>
  )
}

