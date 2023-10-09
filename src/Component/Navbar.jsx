import Fade from 'react-reveal/Fade';


const Navbar = () => {


    const navItems = <>
        <li><a href="/">Home</a></li>
        <li><a href="#about" smooth>About</a></li>
        <li><a href="#skill">Skill</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#service">Service</a></li>

    </>

    return (
    
        <div className="navbar sticky top-0 z-10 glass  lg:rounded-full lg:ps-12 lg:pr-12  pr-4 text-white h-24 ">
             <Fade right>
            <div className="navbar-start max-w-7xl mx-auto">
                <div className="dropdown text-lime-300">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={0} className="menu menu-compact text-black dropdown-content mt-3 p-2 shadow bg-lime-300  rounded-box w-52">
                        {navItems}
                        <li><a></a></li>
                    </ul>

                </div>

                <div className="flex">
                   
                    <div className="">
                        <a href="/"><h1 className="text-8xl text-lime-300" >E</h1></a>
                    </div>
                    <div  className="mt-6">
                        <h4 className="text-2xl">shtiaque</h4>
                        <h4 className="text-2xl"><span>A</span>hmed</h4>
                    </div>
                </div>
             
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">


                <span className="flex">
                  

                    <div className="ps-4 mt-2">
                        <a href="#contact">
                        <button className="btn bg-gradient-to-r from-green-700 to-lime-500 text-lg text-black hover:text-lime-100 ">Hire me</button>

                        </a>
                        
                    </div>

                </span>




            </div>
            </Fade>
        </div>
    );
};


export default Navbar;