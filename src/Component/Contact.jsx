
import img from "../assets/envelope-to-paper-plane-animation.gif"
import { Link } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';
import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';


const Contact = () => {


    return (
        <div className='mb-10' id='contact'>
            <Bounce top>
                <h1 className="text-5xl  text-center  bg-green-700 p-3 text-lime-300 font--black">Contact</h1>
            </Bounce>


            <div className='grid lg:grid-cols-2 mg:grid-cols-2 grid-cols-1 m-2 gap-2'>
                <Roll top>
                    <div className="card w-full  bg-gradient-to-r from-green-900 to-lime-800  text-white">
                        <div className="card-body text-center">
                            <h2 className="font-black text-4xl text-center">Email</h2>
                            <p className='text-xl'>est.ahmed111@gmail.com</p>
                            <Link to="https://mail.google.com/mail/u/0/#inbox?compose=new"><button className="btn btn-outline mt-3 text-lime-300 ">Send a message</button></Link>

                        </div>
                    </div>
                </Roll >
                <Roll bottom>
                    <div className="card w-full  bg-gradient-to-r from-green-900 to-lime-800  text-white">
                        <div className="card-body text-center">
                            <h2 className=" text-center font-black text-4xl">Whatsapp</h2>
                            <p className='text-xl'>+880 01303436227</p>
                            <Link to="https://web.whatsapp.com/"><button className="btn btn-outline text-lime-300 mt-3 ">Send a message</button></Link>

                        </div>
                    </div>
                </Roll>
            </div>



            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
                <div className='w-full  p-3'>
                    <Slide top>
                        <h1 className='text-2xl text-white'>Get me in Touch</h1>
                        <form action="https://formspree.io/f/mnqkayey"
                            method="POST">
                            <div className='m-3  p-3'>
                                <label className='mr-5 text-xl text-white'>Name :</label>
                                <input className='p-3 border border-lime-300 rounded-lg w-full bg-green-500 text-black' type="text" autoComplete="off" name="name" required />
                            </div>
                            <div className='m-3  p-3'>
                                <label className='mr-5 text-xl text-white'>Email :</label>
                                <input className='p-3 border border-lime-300 rounded-lg w-full bg-green-500 text-black' type="email" name="email" autoComplete="off" required />
                            </div>
                            <div className='m-3 p-3 flex'>
                                <label className='mr-6 text-xl text-white'>Message :</label>
                                <textarea className='p-3  border border-lime-300 rounded-lg w-3/4 bg-green-500 text-black' name="message" autoComplete="off" required />
                            </div>
                            <input className='btn  bg-gradient-to-r from-green-700 to-lime-500  mr-5 ml-12 gap-2 m-3 text-black rounded-full w-3/4' type="submit" value="Send" />
                        </form>
                    </Slide>
                </div>
                <Rotate bottom right>
                    <div className='pt-16 m-2 bg-lime-300 rounded-full '>
                        <img className='rounded-full p-3' src={img} alt="" />
                    </div>
                </Rotate>
            </div>

        </div>
    );
};

export default Contact;