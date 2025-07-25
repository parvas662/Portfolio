/* eslint-disable no-unused-vars */

 
import { motion} from "framer-motion";

const NavBar = ()=>{

    return (
        <motion.div
      initial={{ opacity: 0, y: -100 }} // 👈 Start above and invisible
      animate={{ opacity: 2, y: 0 }}   // 👈 Slide down and appear
      transition={{ duration: 1, ease: "easeOut" }} // 👈 Smooth transition
      className="absolute top-5 w-[100vw] flex justify-center "
    >
        <div className="w-[80vw] text-[16px] text-white backdrop-blur-md shadow-lg px-4 py-2 border-2  border-white/50 inset-shadow-gray-100  flex justify-between items-center rounded-4xl">
            <span className="font-Orbitron text-2xl  font-medium hover:cursor-pointer "> &lt; Parvas Sharma /&gt; </span> 
            <ul className="w-[30%]  flex justify-between">
                <li className="hover:cursor-pointer hover:border-b-2 border-white">Home</li>
                <li className="hover:cursor-pointer hover:border-b-2 border-white">About</li>
                <li className="hover:cursor-pointer hover:border-b-2 border-white">Skills</li>
                <li className="hover:cursor-pointer hover:border-b-2 border-white">Projects</li>
            </ul> 
            <button className="px-8 bg-nova hover:text-white transition-all duration-300 py-1  hover:cursor-pointer rounded-3xl">Contact ME</button>
            
        </div> 
    </motion.div>
    )
}

export default NavBar;