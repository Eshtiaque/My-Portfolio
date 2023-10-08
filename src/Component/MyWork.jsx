import { Link } from "react-router-dom";
import photo1 from "../assets/ss/Screenshot from 2023-07-03 16-37-21.png"
import photo2 from "../assets/ss/Screenshot from 2023-07-03 16-38-24.png"
import photo3 from "../assets/ss/Screenshot from 2023-07-03 16-42-31.png"
import photo5 from "../assets/ss/Screenshot from 2023-07-03 16-44-08.png"
import photo8 from "../assets/ss/Screenshot from 2023-07-03 17-07-17.png"
import photo9 from "../assets/ss/Screenshot from 2023-07-03 18-16-58.png"


import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';




const MyWork = () => {
    return (
        <div id="project text-white">
            <Bounce top>
                <h1 className="text-5xl mt-10 mb-5 text-center  underline underline-offset-8 p-3 text-lime-300 font--black">My Project</h1>
            </Bounce>
        
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 m-5 gap-3 text-slate-300 ">
            <Slide left>
                <div className="card w-full  mb-3 bg-slate-950  shadow-2xl">
                    <figure><img src={photo1} alt="Shoes" /></figure>
                  
                    <div className="card-body">
                        <h2 className=" font-black text-2xl text-lime-500">
                            Toys World
                            
                        </h2>
                        <p>

                            A toy store or toy shop is a type of retail business specializing in selling toys.</p>
                        <div className="card-actions justify-end">

                            <Link to="https://toy-world-92db1.web.app/">
                                <div className="badge badge-outline bg-black text-lime-500">Link</div>
                            </Link>
                        </div>
                    </div>
                   
                </div>
                </Slide>
                <Slide left>
                <div className="card w-full 6 mb-3  bg-slate-950  shadow-2xl">
                    <figure><img className=" w-full h-72" src={photo2} alt="Shoes" /></figure>
                  
                    <div className="card-body">
                        <h2 className="font-black text-2xl text-lime-500">
                            Yoga Time
                           
                        </h2>
                        <p>

                            One of the best Yoga site,You can learn YOga from home easily.</p>
                        <div className="card-actions justify-end">

                            <Link to="https://yoga-time-8919f.web.app/">
                                <div className="badge badge-outline bg-black text-lime-500">Link</div>
                            </Link>
                        </div>
                    </div>
                  
                </div>
                </Slide>
                <Slide left>
                <div className="card w-full mb-3 bg-slate-950  shadow-2xl">
                    <figure><img className="h-72" src={photo8} alt="Shoes" /></figure>
                   
                    <div className="card-body">
                        <h2 className="font-black text-2xl text-lime-500">
                        Influencer products
                            
                        </h2>
                        <p>

                            Its a Popular Camera Instrument for customer.</p>
                        <div className="card-actions justify-end">

                            <Link to="https://eshtiaque.github.io/Practise-land/">
                                <div className="badge badge-outline bg-black text-lime-500">Link</div>
                            </Link>
                        </div>
                    </div>
                   

                </div>
                </Slide>
                <Slide right>
                <div className="card w-full  mb-3 bg-slate-950  shadow-2xl">
                    <figure><img src={photo9} alt="Shoes" /></figure>
                  
                    <div className="card-body">
                        <h2 className="font-black text-2xl text-lime-500">
                            Architects
                            
                        </h2>
                        <p>

                            An Architects Company ,where they can get project from client.  </p>
                        <div className="card-actions justify-end">

                         <Link to="https://eshtiaque.github.io/Architects-assign/">
                                <div className="badge badge-outline bg-black text-lime-500">Link</div>
                            </Link>
                        </div>
                    </div>
                   
                </div>
                </Slide>
                <Slide right>
                <div className="card w-full 6 mb-3 bg-slate-950  shadow-2xl">
                    <figure><img src={photo3} alt="Shoes" /></figure>
                  
                    <div className="card-body">
                        <h2 className="font-black text-2xl text-lime-500">
                            Yoga Time
                            
                        </h2>
                        <p>

                            One of the best Yoga site,You can learn YOga from home easily.</p>
                        <div className="card-actions justify-end">

                            <Link to="https://eshtiaque.github.io/Legal-bootstrap/">
                                <div className="badge badge-outline bg-black text-lime-500">Link</div>
                            </Link>
                        </div>
                    </div>
                  
                </div>
                </Slide>
                <Slide right>
                <div className="card w-full mb-3 bg-slate-950  shadow-2xl">
                    <figure><img src={photo5} alt="Shoes" /></figure>
                   
                    <div className="card-body">
                        <h2 className="font-black text-2xl text-lime-500">
                        Influencer products
                            
                        </h2>
                        <p>

                            Its a Popular Camera Instrument for customer.</p>
                        <div className="card-actions justify-end">

                            <Link to="https://stirring-alfajores-9d6517.netlify.app/">
                                <div className="badge badge-outline bg-black text-lime-500">Link</div>
                            </Link>
                        </div>
                    </div>
                   

                </div>
                </Slide>
            </div>
           
            

           
        </div>
       
    );
};

export default MyWork;