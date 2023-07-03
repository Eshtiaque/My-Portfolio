import { GrLinkedin, GrInstagram,  } from 'react-icons/gr';
import { FaGithub, FaFacebookSquare } from 'react-icons/fa';
import Slide from 'react-reveal/Slide';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';


const Footer = () => {
    const goToBtn =()=>{
        window.scrollTo({top:0 ,left:0 , behavior:"smooth"});
    }
    return (
        <div>
           
            <Slide bottom>
            <footer className="footer footer-center p-10 bg-green-950 text-slate-400 rounded">
            <button onClick={goToBtn} className='border-rounded-full text-4xl text-lime-300'> <BsFillArrowUpCircleFill></BsFillArrowUpCircleFill></button>
           
                <div className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Skills</a>
                    <a className="link link-hover">Projects</a>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                    <p className="mb-4 flex gap-4 justify-center text-white">
                            <a href="https://www.linkedin.com/in/eshtiaque-ahmed-150097235/" className="text-2xl"><GrLinkedin /></a>

                            <a href="https://github.com/Eshtiaque" className="text-2xl"><FaGithub /></a>

                            <a href="https://www.instagram.com/kitkat_sajid/" className="text-2xl"><GrInstagram /></a>

                            <a href="https://www.facebook.com/profile.php?id=100009017782174" className="text-2xl"><FaFacebookSquare /></a>
                        </p>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2023 - All right reserved by Eshtiaque Ahmed</p>
                </div>
            </footer>
            </Slide>
        </div>
    );
};

export default Footer;