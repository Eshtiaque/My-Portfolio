import Roll from 'react-reveal/Roll';
import Shake from 'react-reveal/Shake';
import photo1 from "../assets/AffectionateSeparateGazelle-size_restricted.gif"
import photo2 from "../assets/2af00b77b9831ccf199a7360d8d4d39f.gif"
import photo3 from "../assets/giphy.gif"

const Services = () => {
    return (
        <div id="service" className='bg-gradient-to-r from-green-900'>
            <Shake>   <h1 className="text-5xl mt-10 text-center   bg-green-700 p-3 text-lime-300 font--black">Services</h1></Shake>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 m-5 gap-3 '>
            <Roll right>
                <div className="card  bg-gradient-to-r from-green-900 to-lime-800 text-white   shadow-2xl">
                <figure className="p-1">
                        <img src={photo1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-3xl">Full Stack Web Development</h2>
                        <p>To fully comprehend the role of a Full Stack Developer, you must first understand the components of web development. Essentially, web development has two parts – frontend and backend development. Thus, every web or mobile application includes two parts, a frontend, and a backend.</p>
                        <div className="">
                           <a href="/">
                           <button className="btn  bg-black text-lime-300">Read More</button>
                           </a>
                           
                        </div>
                    </div>
                </div>
                </Roll>
                <Roll right>
                <div className="card  bg-gradient-to-r from-green-900 to-lime-800   bg-black text-white  shadow-2xl">
                    <figure className="p-1">
                        <img src={photo2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-3xl">Responsive Web Design</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae magni fugit architecto expedita esse numquam inventore laboriosam dolorem accusantium fugiat.</p>
                        <div className="card-actions">
                        <a href="/">
                           <button className="btn  bg-black text-lime-300">Read More</button>
                           </a>
                        </div>
                    </div>
                </div>
                </Roll>
                <Roll right>
                <div className="card  bg-gradient-to-r from-green-900 to-lime-800  bg-black text-white  shadow-2xl">
                    <figure className="px-1">
                        <img src={photo3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-3xl">Back-end Development</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae magni fugit architecto expedita esse numquam inventore laboriosam dolorem accusantium fugiat.</p>
                        <div className="card-actions">
                        <a href="/">
                           <button className="btn  bg-black text-lime-300">Read More</button>
                           </a>
                        </div>
                    </div>
                </div>
                </Roll>
            </div>

        </div>
    );
};

export default Services;