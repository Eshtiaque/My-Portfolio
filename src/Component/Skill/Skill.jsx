import Shake from 'react-reveal/Shake';
import ProgressBar from "@ramonak/react-progress-bar";
import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide';



const Skill = () => {
    return (
        <div id="skill"> 
            <Shake>   <h1 className="text-5xl mt-10 text-center  bg-green-700 p-3 text-lime-300 font--black">Skill</h1></Shake>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 m-5 gap-9'>
                <Slide left>
                    <div>
                        <div>
                            <p className='text-white text-2xl'>HTML 5</p>
                            <p className='text-lime-300 text-xl'>95 %</p>
                            <ProgressBar className='w-3/4  items-center' bgColor='black' height='24' labelColor='#bef264' animateOnRender={true} completed={95} />
                        </div>
                        <div>
                            <p className='text-white text-2xl'>CSS 3</p>
                            <p className='text-lime-300 text-xl'>85 %</p>
                            <ProgressBar className='w-3/4  items-center' bgColor='black' height='24' labelColor='#bef264' animateOnRender={true} completed={85} />
                        </div>
                        <div>
                            <p className='text-white text-2xl'>Bootstrap</p>
                            <p className='text-lime-300 text-xl'>75 %</p>
                            <ProgressBar className='w-3/4  items-center' bgColor='black' height='24' labelColor='#bef264' animateOnRender={true} completed={75} />
                        </div>
                        <div>
                            <p className='text-white text-2xl'>Tailwind</p>
                            <p className='text-lime-300 text-xl'>80 %</p>
                            <ProgressBar className='w-3/4  items-center' bgColor='black' height='24' labelColor='#bef264' animateOnRender={true} completed={80} />
                        </div>
                        <div>
                            <p className='text-white text-2xl'>JavaScript</p>
                            <p className='text-lime-300 text-xl'>80 %</p>
                            <ProgressBar className='w-3/4  items-center' bgColor='black' height='24' labelColor='#bef264' animateOnRender={true} completed={80} />
                        </div>
                    </div>
                </Slide>
                <Slide right>
                    <div>


                        <div>
                            <p className='text-white text-2xl'>React.Js</p>
                            <p className='text-lime-300 text-xl'>75 %</p>
                            <ProgressBar className='w-3/4  items-center' bgColor='black' height='24' labelColor='#bef264' animateOnRender={true} completed={75} />
                        </div>


                        <div>
                            <p className='text-white text-2xl'>Express.js</p>
                            <p className='text-lime-300 text-xl'>30 %</p>
                            <ProgressBar className='w-3/4  items-center' bgColor='black' height='24' labelColor='#bef264' animateOnRender={true} completed={30} />
                        </div>
                        <div>
                            <p className='text-white text-2xl'>Node.js</p>
                            <p className='text-lime-300 text-xl'>60 %</p>
                            <ProgressBar className='w-3/4  items-center' bgColor='black' height='24' labelColor='#bef264' animateOnRender={true} completed={60} />
                        </div>
                        <div>
                            <p className='text-white text-2xl'>MongoDb</p>
                            <p className='text-lime-300 text-xl'>80 %</p>
                            <ProgressBar className='w-3/4  items-center' bgColor='black' height='24' labelColor='#bef264' animateOnRender={true} completed={80} />
                        </div>
                        <div>
                            <p className='text-white text-2xl'>Git & Github</p>
                            <p className='text-lime-300 text-xl'>80 %</p>
                            <ProgressBar className='w-3/4  items-center' bgColor='black' height='24' labelColor='#bef264' animateOnRender={true} completed={80} />
                        </div>
                    </div>
                </Slide>
            </div>
            <div>
                <Shake>   <h1 className="text-4xl mt-10 text-center  bg-green-700 p-3 text-lime-300 font-black">Professional Skill</h1></Shake>

                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-around text-center mt-5'>
                    <Roll right>
                        <div className=''>
                            <h1 className='text-white m-5 text-2xl '>Team Work </h1>
                            <div className="radial-progress bg-black text-lime-300" style={{ "--value": "75", "--size": "10rem", "--thickness": "1rem" }}>75%</div>

                        </div>
                    </Roll>
                    <Roll right>
                    <div>
                        <h1 className='text-white  m-5 text-2xl'>Management </h1>
                        <div className="radial-progress bg-black text-lime-300" style={{ "--value": "80", "--size": "10rem", "--thickness": "1rem" }}>80%</div>

                    </div>
                    </Roll>
                    <Roll right>
                    <div>
                        <h1 className='text-white  m-5 text-2xl'> Communication </h1>
                        <div className="radial-progress bg-black text-lime-300" style={{ "--value": "65", "--size": "10rem", "--thickness": "1rem" }}>65%</div>

                    </div>
                    </Roll>
                    <Roll right>
                    <div>
                        <h1 className='text-white  m-5 text-2xl'>Creativity </h1>
                        <div className="radial-progress bg-black text-lime-300" style={{ "--value": "70", "--size": "10rem", "--thickness": "1rem" }}>70%</div>

                    </div>
                    </Roll>

                </div>
            </div>


        </div>
    );
};

export default Skill;