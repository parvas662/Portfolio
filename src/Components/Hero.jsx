import { useNavigate } from "react-router";


const Hero = ()=>{
    const navigate = useNavigate();
    
    return (
        <div className="bg-black w-screen h-screen font-Fugaz font-normal flex flex-col  items-center justify-center ">
            <div className="w-[80vw] mb-10">
                <button onClick={()=>navigate('/home')} className="border-3 bg-amber-300 hover:cursor-pointer hover:bg-amber-200 mx-5 p-4 rounded-xl">View Portfolio</button>
                
            </div>
            <div className="w-max h-max">
                <span className="block  text-center  text-white  text-4xl " > Hi, i am </span>
                <span className="block text-nova text-center  text-[112px]" >PARVAS SHARMA</span> 
            </div>
             <div className="w-[80vw] mt-6 flex justify-end">
                <button onClick={()=>navigate("/home?tour=true")} className="border-3 bg-amber-300 hover:cursor-pointer hover:bg-amber-200 p-4 rounded-xl">Sit back & Relax</button>
            </div>
        </div>
    )
}



export default Hero;