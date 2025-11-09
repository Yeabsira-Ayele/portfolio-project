import React from "react";
import Picturepro from './assets/mine.jpg';
import {Prism } from "react-syntax-highlighter" ;
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { height } from "@fortawesome/free-brands-svg-icons/fa11ty";
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
            <div className="major-img-container">
                <div className="img-container-near">
                    <Prism
                    customStyle={{margin: 0,
                        height: "100%",
                        padding: "2rem" ,
                        borderRadius: "20px"
                    }}
                    language="typescript"
                    style={vscDarkPlus}>
                        {`const aboutMe = {
  codename: "Yeabsira",
  origin: "Somewhere between VS Code and a warm cup of tea",
  role: "Frontend Web Developer",

  stack: {
    languages: ["JavaScript", "Python", "HTML", "CSS"],
    frameworks: ["React", "Vite"],
    tools: ["Git", "Figma", "VS Code"],
  },
  traits: [
    "creative problem solver",
    "UI/UX lover",
    "dark mode enthusiast",
    "debugging survivor",
    "keyboard shortcut addict"
  ],
  missionStatement:
    "Building clean interfaces and turning complex problems into simple solutions.",
  availability: "Open for projects",
  funFact: "I can turn coffee into beautiful components ☕️➡️💻",
};

export default aboutMe;`}
                    </Prism>
                </div>
            </div>
                
            </div>
        </div>
                      
    );
}
export default Aboutme ;