import React from "react";
import Picturepro from './assets/mine.jpg';
function Aboutme(){
    return(
        <div  className="about">
            <nav className="main-container-nav">
                <div className="company-name">
                   <p>
                    Yeab-org
                   </p>
                </div>
                <div className="links-container">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </div>
            </nav>
           <div className="about-container">
           <div>  
                <h5>I'm  Yeabsira Ayele ,<span>a Software Enginnering</span>  <br></br>Student and <br></br> <span>Front End Website Developer</span>.
            I enojoy,<br></br>solving problem through code and building <br></br> interactive web projects.
</h5>
                 <div>
                 
                <ul className="for-skills">
                    <li><h4>Skills</h4></li>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>Python</li>
                </ul>
             
            </div> 
            </div>
            <div className="img-containrt">
                <img src={Picturepro} alt="my profilr picture" className="img-container" />
            </div>
                
            </div>
        </div>
                      
    );
}
export default Aboutme ;