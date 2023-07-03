import photo from "../assets/1687196000719.jpg"
import { GrProjects } from 'react-icons/gr';
import img from "../assets/Picsart_23-07-02_15-57-11-668.png"
import Fade from 'react-reveal/Fade';


const About = () => {
    return (
        <div id="about" className=" bg-gradient-to-r from-green-900 to-yellow-200">
            <Fade right>
                <div className="max-w-md  rounded-full  lg:hidden md:hidden">


                    <img className="mt-12  " src={img} alt="" />


                    <h2 className="absolute bg-gradient-to-r from-green-500 from-10%  to-lime-300 to-90% flex gap-2  text-black p-7 rounded-bl-full rounded-tr-full text-2xl  -mt-16">
                        <GrProjects ></GrProjects>  20+  Project *</h2>

                </div>
                <h1 className="text-5xl mt-10 text-center bg-green-700 p-3 text-lime-300 font--black">About</h1>
                <div className="grid lg:grid-cols-2 md:grid-cols-2">
                    <div className="w text-black text-2xl  mt-16 ml-6 pr-2  ">
                        I am <span className="text-4xl text-lime-300  "> Eshtiaque </span>Ahmed ,
                        <br /> I am 23 years old fresher full-stack developer. <br />  I am from Chuadanga, Bangladesh.<br />  Even though I am currently studying for a bachelor degree in CSE.I am passionate about web development and want to create user-friendly websites and applications. I am always try to explore new technologies to further enhance my skills and contribute to the field of web development
                        {/* The button to open modal */}

                        <hr className=" mb-4 mt-4 border-2 border-black " />

                        <label htmlFor="my-modal" className="btn gap-2 m-3 bg-black text-lime-300 rounded-full"> Read More</label>

                        <hr className=" mb-4 mt-4 border-2 border-black " />


                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box bg-green-950 text-yellow-100">
                                <h3 className="font-bold ">Know More :</h3>
                                <p className="py-4">As a passionate developer, I believe in hard work. Last one year I consistently learn (MERN) stack development. I learn a lot of technology in that time and did almost 20+ projects. Also, I continuously seek out opportunities to enhance my skills and stay up-to-date with the latest trends in web development. Now I am seeking an opportunity to start my professional development career.</p>
                                <div className="modal-action">
                                    <label htmlFor="my-modal" className="btn text-yellow-100">Yay!</label>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="w m-5">
                        <Fade top>
                            <img className="rounded-full" src={photo} alt="" />
                        </Fade >
                    </div>
                </div>
            </Fade>
        </div>
     




    );
};

export default About;