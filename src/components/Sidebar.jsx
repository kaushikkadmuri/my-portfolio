import './Sidebar.css';
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoCodeSlashOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
// import { Link } from 'react-scroll';

function Sidebar() {

    return (
        <>
        <nav id='navbar'>
            <h1 className='logo'>Portfolio.</h1>
            <ul>
                {/* <li><Link to="home" smooth={true} duration={300} ><IoHomeOutline className='icon'/>Home</Link></li>
                <li><Link to="about" smooth={true} duration={300} ><IoPersonOutline className='icon'/>About</Link></li>
                <li><Link to="projects" smooth={true} duration={300} ><IoCodeSlashOutline className='icon'/>Projects</Link></li>
                <li><Link to="contact" smooth={true} duration={300} ><IoCallOutline className='icon'/>Contact</Link></li> */}
                
                <li><Link to="/home"><IoHomeOutline className='icon'/>Home</Link></li>
                <li><Link to="/about"><IoPersonOutline className='icon'/>About</Link></li>
                <li><Link to="/projects"><IoCodeSlashOutline className='icon'/>Projects</Link></li>
                <li><Link to="/contact"><IoCallOutline className='icon'/>Contact</Link></li>
            </ul>
        </nav>
        </>
    );
}

export default Sidebar;