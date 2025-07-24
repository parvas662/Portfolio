



const NavBar = ()=>{

    return (
    <div  className="fixed w-[100vw] h-14 mt-5  flex justify-center ">
        <div className="w-[80vw] bg-[#f5f5f5] px-4 border-3 border-gray-200 inset-shadow-gray-100  flex justify-between items-center rounded-4xl">
            <span className="font-Allura text-3xl mt-2 font-bold hover:cursor-pointer"> &lt; Parvas Sharma /&gt; </span> 
            <ul className="w-[30%]  flex justify-between">
                <li className="hover:cursor-pointer">Home</li>
                <li className="hover:cursor-pointer">About</li>
                <li className="hover:cursor-pointer">Skills</li>
                <li className="hover:cursor-pointer">Projects</li>
            </ul> 
            <button className="px-8 py-1 border-2 hover:cursor-pointer rounded-3xl">Contact</button>
            
        </div>
    </div>
    )
}

export default NavBar;