
import HomeLayout from "../Layouts/HomeLayout"
import aboutMainImage from "../Assets/Images/aboutMainImage.png"
import apj from "../Assets/Images/apj.png"
import billGates from "../Assets/Images/billGates.png"
import steveJobs from "../Assets/Images/steveJobs.png"
import nelsonMandela from "../Assets/Images/nelsonMandela.png"
import einstein from "../Assets/Images/einstein.png"
export default function AboutUs(){
    return(
        <HomeLayout>
             <div className="pl-20 pt-20 flex flex-col text-white">
                 <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and quality education
                        </h1>
                        <p className="text-xl text-gray-200">
                            Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit. Autem perfere
                            ndis fuga laudantium ad distinctio quia 
                            fugit neque, laborum molestias ipsum.
                        </p>
                    </section>
                    <div className="w-1/2">
                         <img 
                         className="drop-shadow-2xl"
                         id="test1"
                         style={{
                            filter:"drop-shadow(0px 10px 10px rgb(0,0,0))"
                         }}
                         src={aboutMainImage }
                         alt="aboutImage" />
                    </div>
                 </div>
              {/* add carousel to the */}
              <div className="carousel w-1/2 my-16 m-auto">
                    <div id="slide1" className="carousel-item relative w-full">
                            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                <img src={nelsonMandela} className="w-40 rounded-full border-2 border-gray-400" />
                                <p className="text-xl text-gray-500">Education is the most powerfull tool you can use to change the world</p>
                                <h2 className="text-2xl font-semibold text-gray-500"> Nelson Mandela</h2>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide5" className="btn btn-circle">❮</a> 
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                     </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                <img src={apj} className="w-40 rounded-full border-2 border-gray-400" />
                                <p className="text-xl text-gray-500">Education is the most powerfull tool you can use to change the world</p>
                                <h2 className="text-2xl font-semibold text-gray-500"> APJ Abdul Kalam</h2>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">❮</a> 
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                <img src={einstein} className="w-40 rounded-full border-2 border-gray-400" />
                                <p className="text-xl text-gray-500">Education is the most powerfull tool you can use to change the world</p>
                                <h2 className="text-2xl font-semibold text-gray-500"> Albert Einstein</h2>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❮</a> 
                                    <a href="#slide4" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full">
                            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                <img src={steveJobs} className="w-40 rounded-full border-2 border-gray-400" />
                                <p className="text-xl text-gray-500">Education is the most powerfull tool you can use to change the world</p>
                                <h2 className="text-2xl font-semibold text-gray-500"> Steve Jobs</h2>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" className="btn btn-circle">❮</a> 
                                    <a href="#slide5" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                <img src={billGates} className="w-40 rounded-full border-2 border-gray-400" />
                                <p className="text-xl text-gray-500">Education is the most powerfull tool you can use to change the world</p>
                                <h2 className="text-2xl font-semibold text-gray-500"> Bill Gates</h2>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-circle">❮</a> 
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                    </div>
                 </div>
         </div>


        </HomeLayout>
    )
}