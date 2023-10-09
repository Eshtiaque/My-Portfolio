import ProgressBar from "@ramonak/react-progress-bar";
import Roll from 'react-reveal/Roll';



const Skill = () => {
    return (
        <div id="skill"> 
            <div>   <h1 className="text-5xl mt-10 text-center  underline underline-offset-8 p-3 text-lime-300 font--black">Skill</h1></div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 m-5 gap-9'>
                <div>
                    <div>
                        <div>
                            <p className='text-white text-2xl'>HTML 5</p>
                            <p className='text-lime-300 text-xl'>95 %</p>
                            <ProgressBar className='w-3/4  items-center mb-2' bgColor='black' height='24' labelColor='#bef264' animateOnRender={true} completed={95} />
                        </div>
                        <div>
                            <p className='text-white text-2xl'>CSS 3</p>
                            <p className='text-lime-300 text-xl'>85 %</p>
                            <ProgressBar className='w-3/4  items-center mb-2' bgColor='black' height='24' labelColor='#bef264' animateOnRender={true} completed={85} />
                        </div>
                        <div>
                            <p className='text-white text-2xl'>Bootstrap</p>
                            <p className='text-lime-300 text-xl'>75 %</p>
                            <ProgressBar className='w-3/4  items-center mb-2' bgColor='black' height='24' labelColor='#bef264' animateOnRender={true} completed={75} />
                        </div>
                        <div>
                            <p className='text-white text-2xl'>Tailwind</p>
                            <p className='text-lime-300 text-xl'>80 %</p>
                            <ProgressBar className='w-3/4  items-center mb-2' bgColor='black' height='24' labelColor='#bef264' animateOnRender={true} completed={80} />
                        </div>
                        <div>
                            <p className='text-white text-2xl'>JavaScript</p>
                            <p className='text-lime-300 text-xl'>80 %</p>
                            <ProgressBar className='w-3/4  items-center mb-2' bgColor='black' height='24' labelColor='#bef264' animateOnRender={true} completed={80} />
                        </div>
                    </div>
                </div>
                <div >
                    <div>


                        <div>
                            <p className='text-white text-2xl'>React.Js</p>
                            <p className='text-lime-300 text-xl'>75 %</p>
                            <ProgressBar className='w-3/4  items-center mb-2' bgColor='black' height='24' labelColor='#bef264' animateOnRender={true} completed={75} />
                        </div>
                    

                        <div>
                            <p className='text-white text-2xl'>Express.js</p>
                            <p className='text-lime-300 text-xl'>30 %</p>
                            <ProgressBar className='w-3/4  items-center mb-2' bgColor='black' height='24' labelColor='#bef264' animateOnRender={true} completed={30} />
                        </div>
                        <div>
                            <p className='text-white text-2xl'>Node.js</p>
                            <p className='text-lime-300 text-xl'>60 %</p>
                            <ProgressBar className='w-3/4  items-center mb-2' bgColor='black' height='24' labelColor='#bef264' animateOnRender={true} completed={60} />
                        </div>
                        <div>
                            <p className='text-white text-2xl'>MongoDb</p>
                            <p className='text-lime-300 text-xl'>80 %</p>
                            <ProgressBar className='w-3/4  items-center mb-2' bgColor='black' height='24' labelColor='#bef264' animateOnRender={true} completed={80} />
                        </div>
                        <div>
                            <p className='text-white text-2xl'>Git & Github</p>
                            <p className='text-lime-300 text-xl'>80 %</p>
                            <ProgressBar className='w-3/4  items-center mb-2' bgColor='black' height='24' labelColor='#bef264' animateOnRender={true} completed={80} />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>   <h1 className="text-5xl mt-24 mb-24 text-center  underline underline-offset-8 p-3 text-lime-300 font-black">Professional Skill</h1></div>

                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-around text-center mt-5 gap-2  '>
                    <Roll right>
                        <div className='bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950  rounded-3xl  pb-5'>
                            <h1 className='text-white m-5 text-2xl text-left'>Team Work </h1>
                            <div className="radial-progress bg- text-lime-400" style={{ "--value": "75", "--size": "6rem", "--thickness": "0.5rem" }}>75%</div>
                            

                        </div>
                    </Roll>
                    <Roll right>
                        
                    <div className='text-center bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 rounded-3xl  pb-5'>
                        <h1 className='text-white  m-5 text-2xl text-left'>Management </h1>
                        <div className="radial-progress  text-lime-400" style={{ "--value": "80", "--size": "6rem", "--thickness": "0.5rem" }}>80%</div>
                       
                    </div>
                    </Roll>
                    <Roll right>
                    
                    <div className='bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 rounded-3xl  pb-5'>
                        <h1 className='text-white text-left m-5 text-2xl'> Communication </h1>
                        <div className="radial-progress  text-lime-400" style={{ "--value": "65", "--size": "6rem", "--thickness": "0.5rem" }}>65%</div>
                       

                    </div>
                    </Roll>
                    
                    <Roll right>
                    <div className='bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 rounded-3xl  pb-5 '>
                        <h1 className='text-white text-center m-5 text-2xl'>Creativity </h1>
                        <div className="radial-progress  text-lime-400" style={{ "--value": "70", "--size": "6rem", "--thickness": "0.5rem" }}>70%</div>
                       
                    </div>
                    </Roll>
                
                
               

                </div>
            </div>


        </div>
    );
};

export default Skill;