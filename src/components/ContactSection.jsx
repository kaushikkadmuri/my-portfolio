import './ContactSection.css';
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import SendMessage from './SendMessage.jsx';

function ContactSection() {
    return(
        <>
        <section id='contact' className="contact-section">
            <h2 className="section-title">Contact Me</h2>
            <div className="contact-row1-wrapper">
                <h3>Have Any Questions ?</h3>
                <h4>I'M AT YOUR SERVICE</h4>
            </div>
            <div className="contact-row2-wrapper">
                <div className="contact-info-item">
                    <IoCallOutline className='contact-logo'/>
                    <h4>Call Us On</h4>
                    <p>+91 8500811470</p>
                </div>
                <div className="contact-info-item">
                    <IoMailOutline className='contact-logo'/>
                    <h4>Email</h4>
                    <p>kadmurikaushik@gmail.com</p>
                </div>
                <div className="contact-info-item">
                    <IoLocationOutline className='contact-logo'/>  
                    <h4>Location</h4>
                    <p>Hyderabad</p> 
                </div>
            </div>
            <SendMessage />
        </section>
        </>
    );
}

export default ContactSection;