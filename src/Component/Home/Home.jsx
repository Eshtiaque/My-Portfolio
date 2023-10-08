import About from "../About";
import Banner from "../Banner";
import Contact from "../Contact";
import Footer from "../Footer";
import MyWork from "../MyWork";
import Navbar from "../Navbar";
import Services from "../Services";
import Skill from "../Skill/Skill";
import "./Home.css";



const Home = () => {

    return (
     
        <div className="bg-slate-800">
            <div className=' font-black mx-auto max-w-7xl'>
        <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Skill></Skill>
            <MyWork></MyWork>
            <Contact></Contact>
            <Footer></Footer>
        </div>
        </div>
        
    );
};

export default Home;