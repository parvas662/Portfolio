import { useNavigate } from "react-router";


const Hero = ()=>{
    const navigate = useNavigate();
    const handleClick = ()=>{
         setTimeout(() => {
         navigate('/home');
         
       }, 200); 
    }
    return (
        <div className="bg-nova w-screen h-screen font-Fugaz font-normal flex flex-col items-center ">
            <div className="w-max  h-max">
                <span className="block  text-center mt-20  text-white  text-4xl " > Hi, i am </span>
            <span className="block text-slate-950 text-center  text-[112px] " >PARVAS</span>
            <span className="block text-3xl text-center  text-gray-300 ">A Front-End Developer.</span>
            </div>
            <div className="my-10">
                <button onClick={handleClick} 
                className="border-3 bg-amber-300 hover:cursor-pointer hover:bg-amber-200 mx-5 p-4 rounded-xl">View Portfolio</button>
                <button onClick={handleClick} className="border-3 bg-amber-300 hover:cursor-pointer hover:bg-amber-200 p-4 rounded-xl">Sit back & Relax</button>
            </div>
        </div>
    )
}



export default Hero;