

const Home = () => {

    return (
        <div className="flex flex-col max-w-screen h-screen pt-30 bg-black/70 bg-[linear-gradient(to_top,black_2%,transparent_30%)] ">
            <div className="  text-white  ">
                <div className="font-OpenSans w-150 mx-20 my-5 h-max ">
                    <p className="text-nova text-8xl">FRONTEND</p>
                    <p className="px-3 text-8xl">DEVELOPER</p>
                    <p className="w-145 p-3 text-[#b5b5b5a4] bg-clip-text inline-block animate-shine text-lg slide-up-and-fade cursor">
                        A creative Frontend Developer with 3+ years of experience in building high-performance, scalable, and responsive web solutions.
                    </p>
                </div>
                    <div className="flex w-[80%] text-center  ">
                        <div className="px-8 w-sm custom-translate  hover:translate-x-6 hover:-translate-y-6 
                     transition-transform duration-400 will-change-transform ">
                            <a
                                className="bg-nova group h-12 px-8 inline-flex justify-center items-center gap-2 text-lg uppercase tracking-widest outline-none transition-colors relative overflow-hidden bg-primary text-black hover:text-nova font-semibold hover:bg-primary mt-9 banner-button rounded-md cursor-pointer"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="/resume.pdf"
                            >
                                <span className="absolute top-[200%] left-0 right-0 h-full bg-white text-nova rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150"></span>
                                <span className="z-[1] font-[JosefinSans] font-thin">Resume</span>
                            </a>
                        </div>
                        <div className="  h-20">
                            
                        </div>

                    </div>
                

            </div>
        </div>
    )
}



export default Home;