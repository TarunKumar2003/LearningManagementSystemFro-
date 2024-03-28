

export default function CarosouelSlide({image, name, quote, slideNumber, totalSlide}){
    return(
        <div id={`slide${slideNumber}`} className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                <img src={nelsonMandela} className="w-40 rounded-full border-2 border-gray-400" />
                <p className="text-xl text-gray-500">{quote}</p>
                <h2 className="text-2xl font-semibold text-gray-500"> {name}</h2>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide${(slideNumber==1) ? totalSlide :slideNumber-1}`}className="btn btn-circle">❮</a> 
                    <a href={`#slide${(slideNumber)%totalSlide + 1}`}className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
}
