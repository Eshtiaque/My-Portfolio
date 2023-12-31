// import Shake from 'react-reveal/Shake';
import photo1 from "../assets/AffectionateSeparateGazelle-size_restricted.gif"
import photo2 from "../assets/2af00b77b9831ccf199a7360d8d4d39f.gif"
import photo3 from "../assets/giphy.gif"
import { Fade } from 'react-reveal';

const Services = () => {
    return (
        <div id="service" className=''>
            <div>   <h1 className="text-5xl mt-10 text-center   underline underline-offset-8 p-3 text-lime-300 font--black">Services</h1></div>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 m-5 gap-3 '>
            <Fade right>
                <div className="card     text-white  ">
                    <figure className="">
                        <img src={photo2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-3xl">Design & Responsive Web Design</h2>
                        <p className='text-sm mt-7'>
Responsive Web design is the approach that suggests that design and development should respond to the users behavior and environment based on screen size, platform and orientation. It makes website Amazing.</p>
                        <div className="card-actions">
                        <a href="/">
                           <button className="btn btn-sm rounded-full bg-gradient-to-r from-green-700 to-lime-500  text-black hover:text-lime-100">Read More</button>
                           </a>
                        </div>
                    </div>
                </div>
                </Fade>
            <Fade right>
                <div className="card h-84  text-white   shadow-2xl">
                <figure className="p-1">
                        <img src={photo1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-3xl">Full Stack Web Development</h2>
                        <p className='text-sm'>To fully comprehend the role of a Full Stack Developer, you must first understand the components of web development. Essentially, web development has two parts – frontend and backend development. Thus, every web or mobile application includes two parts, a frontend, and a backend.</p>
                        <div className="">
                           <a href="/">
                           <button className="btn btn-sm rounded-full bg-gradient-to-r from-green-700 to-lime-500  text-black hover:text-lime-100">Read More</button>
                           </a>
                           
                        </div>
                    </div>
                </div>
                </Fade>
                
                <Fade right>
                <div className="card    text-white  ">
                    <figure className="px-1">
                        <img src={photo3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-3xl">Database & Back-end Development</h2>
                        <p className='text-sm mt-7'>Back-end developers write applications that end-users use to interact with databases. Some common tasks that end-users carry out using these applications include storing, searching, extracting and manipulating data..</p>
                        <div className="card-actions">
                        <a href="/">
                           <button className="btn btn-sm rounded-full bg-gradient-to-r from-green-700 to-lime-500  text-black hover:text-lime-100">Read More</button>
                           </a>
                        </div>
                    </div>
                </div>
                </Fade>
            </div>

        </div>
    );
};

export default Services;