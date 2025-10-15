import './AboutSection.css';
import EducationTimeline from './EducationTimeline.jsx';

function AboutSection() {
    return(
        <>
        <section id='about' className="about-section">
            <h2 className='section-title'>About Me</h2>
            <p className='para-greet'>Hello, My name is Kaushik.</p>
            <p className='para-about'>I'm from Hyderabad.<br></br> About my education, I completed my schooling from HAL Secondary School in the year 2019, followed by my intermediate (2019 - 2021) from Excellencia Junior College. I then, pursued a Bachelor of Technology in Computer Science and Engineering from Narsimha Reddy Engineering College (2021 - 2025), where I gained a strong foundation in programming and software development principles.<br></br> Currently, I'm a trainee at Kapil IT in Ameerpet, where I'm focusing on Python Full Stack Development. My technincal skills include Frontend Technologies such as HTML, CSS, JavaScript, React.js. Backend development with python and django as the framework, and also database management with MySQL. I have also worked on a few real-time projects, which have helped me gain practical experience.<br></br> Regarding my hobbies, I enjoy playing chess. I have an active account on chess.com, where I like to play matches and solve chess puzzles.<br></br> Looking ahead, over the next two years, my goal is to secure a junior developer position and eventually progress to a team lead role.</p>
            <div className="info-skill-wrapper">
                <div className="info-wrap">
                    <div className="info-col1">
                        <p className='info-p'><span className='info-item'>Birthday</span> : 28 March 2004</p>
                        <p className='info-p info-email'><span className='info-item'>Email</span> : kadmurikaushik@gmail.com</p>
                        <p className='info-p'><span className='info-item'>Work Field</span> : Python Full Stack</p>
                    </div>
                    <div className="info-col2">
                        <p className='info-p'><span className='info-item'>Experience</span> : Fresher</p>
                        <p className='info-p'><span className='info-item'>Phone</span> : +91 8500811470</p>
                        <p className='info-p'><span className='info-item'>City</span> : Hyderabad</p>
                    </div>
                </div>
                <div className="skill-wrap">
                    <h3 className='skill-title'>Skills</h3>
                    <div className="skill">
                        <h4 className='skill-field'>Frontend Technologies -</h4>
                        <h3 className='skill-item'>HTML, CSS, JavaScript, React.js</h3>
                        <h4 className='skill-field'>Backend Technologies -</h4>
                        <h3 className='skill-item'>Python, Django</h3>
                        <h4 className='skill-field'>Database Management -</h4>
                        <h3 className='skill-item'>MySQL</h3>
                    </div>
                </div>
            </div>
            <button className='btn-resume'>View Resume</button>
            <EducationTimeline />
        </section>
        </>
    );
}

export default AboutSection;