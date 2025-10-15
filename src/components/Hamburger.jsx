import './Hamburger.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Hamburger() {
    const [open,setOpen] = useState(false);
    const handleMenu = () => { 
        setOpen(!open);
        document.getElementById("hamburger").classList.toggle("cross");
    }
  
    return (
        <>
        <div className="navigation">
            <div id="hamburger" className="hamburger" onClick={handleMenu}>
                <div id="bar1" className="bar"></div>
                <div id="bar2" className="bar"></div>
                <div id="bar3" className="bar"></div>
            </div>

            <ul className={`menu ${open ? 'active' : ''}`} >
                <li><Link to="/home" onClick={handleMenu}>Home</Link></li>
                <li><Link to="/about" onClick={handleMenu}>About</Link></li>
                <li><Link to="/projects" onClick={handleMenu}>Projects</Link></li>
                <li><Link to="/contact" onClick={handleMenu}>Contact</Link></li>
            </ul>
        </div>
        </>
    )
    }

export default Hamburger;