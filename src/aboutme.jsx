import React from "react";
import {Prism } from "react-syntax-highlighter" ;
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { height } from "@fortawesome/free-brands-svg-icons/fa11ty";
function Aboutme(){
    return( 
    <div id="aboutme"  className="about">
            <main>
                <div className="about-container">
                    <div>  
                        <span className="hello">Hello I'm</span>
                        <h5>Yeabsira Ayele ,<span>a Software Enginnering</span>  <br></br>Student and <br></br> <span>Front End Website Developer</span>.
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
                    customStyle={{margin: "100px",
                        fontSize:"2px",
                        lineHeight:" 1.4",
                        fontWeight: "lighter",
                        backgroundColor: "hsla(200, 40%, 75%,1)" ,
                        height: "100%",
                        padding: "2rem" ,
                        borderRadius: "20px",
                        marginBottom: "50px",
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
`}
                    </Prism>
                </div>
           
            </div>
        </div>
            </main>
    </div>);
}
export default Aboutme ;