// import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import photo from "../assets/fern-foliage-plant-nature.jpg"
import img from "../assets/Picsart_23-07-02_15-57-11-668.png"
import { GrLinkedin, GrInstagram, GrProjects } from 'react-icons/gr';
import { FaGithub, FaFacebookSquare } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Slide from 'react-reveal/Slide';


const Banner = () => {
    return (
        <div className="pt-16 w-full h-[600px] " style={{ backgroundImage: `url(${photo})` }}>
            <div className=" bg-opacity-60"></div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 text-left">
                <Slide left>

                    <div className="max-w-md text-center  mt-32 ml-5">
                        <h4 className="text-lime-300">Welcome To My World</h4>

                        <h1 className="mb-5 text-5xl font-bold text-white">Hi , {"I'm"} <span className="text-lime-300 pr-2"> Eshtiaque</span> </h1>


                        <div className="mb-5 text-xl font-bold text-lime-300">


                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed once, initially
                                    "|| Passionate Full-stack Developer",
                                    1000,
                                    '|| Passionate Web Developer',
                                    1000,
                                    '|| Passionate React Developer',
                                    1000,

                                ]}
                                speed={20}
                                style={{ fontSize: '1em', color: '' }}
                                repeat={Infinity}
                            />
                        </div>
                        <p className="mb-3 text-white pr-2
">Welcome to my portfolio website. Specialize in both frontend and backend development.Take a look at my project and explore the world,Where Imagination meets Creativity</p>,
                        <p className="mb-4 flex gap-4 justify-center text-white">
                            <a href="https://www.linkedin.com/in/eshtiaque-ahmed-150097235/" className="text-2xl"><GrLinkedin /></a>

                            <a href="https://github.com/Eshtiaque" className="text-2xl"><FaGithub /></a>

                            <a href="https://www.instagram.com/kitkat_sajid/" className="text-2xl"><GrInstagram /></a>

                            <a href="https://www.facebook.com/profile.php?id=100009017782174" className="text-2xl"><FaFacebookSquare /></a>
                        </p>
                        <Link to="https://drive.google.com/uc?export=download&id=1kdBMlUdJZeYxp3NCUCO4_LqILfJL3ao5">
                            <button className="btn  bg-gradient-to-r from-green-700 to-lime-500 text-black mr-5 hover:bg-black">My Resume</button>

                        </Link>
                        <a href="#contact">
                            <button className="btn btn-outline text-lime-300
                     hover:bg-gradient-to-r from-green-700 to-lime-500 hover:text-black">Contact</button>
                        </a>

                    </div>
                </Slide>

                <div className="max-w-md  rounded-full hidden lg:block md:block">
                    <Slide right>
                        <img className="mt-12  " src={img} alt="" />


                        <h2 className="absolute bg-gradient-to-r from-green-500 from-10%  to-lime-300 to-90% flex gap-2  text-black p-7 rounded-bl-full rounded-tr-full text-2xl  -mt-16">
                            <GrProjects ></GrProjects>  20+  Project *</h2>
                    </Slide>
                </div>
            </div>
        </div >
    );
};

export default Banner;
