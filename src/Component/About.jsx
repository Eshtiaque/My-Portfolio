import photo from "../assets/1687196000719.jpg"
import { GrProjects } from 'react-icons/gr';
import img from "../assets/Picsart_23-07-02_15-57-11-668.png"
import Fade from 'react-reveal/Fade';


const About = () => {
    return (
        <div id="about" className=" ">
            <hr className=" mb-4 mt-4 border-2 border-gray-600 " />
            <Fade right>
                <div className="max-w-md  rounded-full  lg:hidden md:hidden">


                    <img className="mt-12  " src={img} alt="" />


                    <h2 className="absolute bg-gradient-to-r from-green-500 from-10%  to-lime-300 to-90% flex gap-2  text-black p-7 rounded-bl-full rounded-tr-full text-2xl  -mt-16">
                        <GrProjects ></GrProjects>  20+  Project *</h2>

                </div>
                <h1 className="text-5xl mt-10 text-center underline underline-offset-8  p-3 text-lime-300 font--black">About</h1>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                    <div className=" text-slate-300 text-2xl  mt-16 ml-6 pr-2  text-center ">
                        I am <span className="text-4xl text-lime-300  "> Eshtiaque </span>Ahmed ,
                        <br /> I am 23 years old fresher full-stack developer. <br />  I am from Chuadanga, Bangladesh.<br />  Even though I am currently studying for a bachelor degree in CSE.I am passionate about web development and want to create user-friendly websites and applications. I am always try to explore new technologies to further enhance my skills and contribute to the field of web development
                        {/* The button to open modal */}

                        <hr className=" mb-4 mt-4 border-2 border-gray-600 " />

                        <label htmlFor="my-modal" className="btn  bg-gradient-to-r from-green-700 to-lime-500 text-lg text-black hover:text-lime-100 rounded-full border-none "> Read More</label>

                        


                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box bg-slate-900 text-yellow-100">
                                <h3 className="font-bold ">Know More :</h3>
                                <p className="py-4 text-sm">As a passionate developer, I believe in hard work. Last one year I consistently learn (MERN) stack development. I learn a lot of technology in that time and did almost 20+ projects. Also, I continuously seek out opportunities to enhance my skills and stay up-to-date with the latest trends in web development. Now I am seeking an opportunity to start my professional development career.</p>
                                <div className="modal-action">
                                    <label htmlFor="my-modal" className="btn-sm text-yellow-100">Yay!</label>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="w lg:m-8">
                        <Fade top>
                            <img className="lg:rounded-2xl p-2 rounded-3xl item-center  lg:h-96 lg:w-96" src={photo} alt="" />
                        </Fade >
                    </div>
                </div>
            </Fade>
        </div>
     




    );
};

export default About;