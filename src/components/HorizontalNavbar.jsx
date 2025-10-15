import Hamburger from './Hamburger.jsx';
import './Hamburger.css';

function HorizontalNavbar() {
  return (
    <>
    <div className="navbar">
        <h1 className='logo'>Portfolio.</h1>
        <Hamburger />
    </div>
    </>
  )
}

export default HorizontalNavbar;