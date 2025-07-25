 
import NavBar from "./NavBar";

import About from "./About";
import Home from "./Home";

const Homepage = ()=>{

    return (
        <div className=" bg-red-700/90">
            <NavBar/>  
            <Home/> 
            <About/>     
        </div>
    )
}



export default Homepage;