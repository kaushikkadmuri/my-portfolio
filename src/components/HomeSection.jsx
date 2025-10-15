import './HomeSection.css';
import { GoArrowDownRight } from "react-icons/go";
import profilePic from './assets/_pic.jpg';
import { Link } from 'react-router-dom'
// import { Link } from 'react-scroll';

function HomeSection() {
    
    return (
        <>
        <section id='home' className='home-section'>
            <div className="container">
                <h3 className='hello'>Hello, My name is <span className='name'>Kaushik</span></h3>
                <h3 className='profession'>I'm a <span className='name'>Web Developer</span></h3>
                <p>I design websites which are user friendly. Feel free to check out my work !</p>
            </div>
            <div className="img-btn-wrapper">
                <div className="img-container">
                    <img src={profilePic} alt="Profile Photo" />
                </div>
                {/* <Link to="about" smooth={true} duration={300} className='btn'>More About Me <GoArrowDownRight className='down-arrow'/></Link> */}
                <Link to="/about" className='btn'>More About Me <GoArrowDownRight className='down-arrow'/></Link>
            </div>
        </section>
        </>
    );
}

export default HomeSection;