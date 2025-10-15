import './EducationTimeline.css'
import { IoCalendarClearOutline } from "react-icons/io5";

function EducationTimeline() {
    return(
        <>
        <div className="edu-exp-wrap">
            <div className="education">
                <h3>Education</h3>
                <div className="box">
                    <div className="timeline timeline1">
                        <div className="circle"></div>
                        <div className="date">
                            <IoCalendarClearOutline /> 2021 - 2025
                            <h4>Batchelor of Technology in CSE</h4>
                            <h4>CGPA - 6.52</h4>
                        </div>
                    </div> 
                    <div className="timeline timeline2">
                        <div className="circle"></div>
                        <div className="date">
                            <IoCalendarClearOutline /> 2019 - 2021
                            <h4>Intermediate Education</h4>
                            <h4>CGPA - 9.32</h4>
                            </div>
                    </div> 
                    <div className="timeline timeline3">
                        <div className="circle"></div>
                        <div className="date">
                            <IoCalendarClearOutline />2019
                            <h4>Secondary Education (CBSE)</h4>
                            <h4>CGPA - 7.92</h4>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="experience">
                <h3>Experience</h3>
                <div className="box">
                    <div className="timeline">
                        <h3>Fresher (2025)</h3>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default EducationTimeline;