import Picture from './assets/pic.jpg'
import React from 'react';
function Hero(){
    
    return(
    <div className='hero'>
        <nav className="main-container-nav">
            <div className="company-name">
                <p>
                    Portfolio
                </p>
            </div>
            <div className="links-container">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#aboutme">About</a></li>
                     <li><a href="#contactme">Contact</a></li>
                </ul>
            </div>
        </nav>  
        <div className="profile-pic-container">
            <div className="pic-container">
                <img src={Picture} />
            </div>
            <div className="seif-info">
                <h2>Hello!!</h2>
                <h2>I am Yeabsira Ayele</h2>
                <p>A Software Enginnering Student and Front End Website<br></br> Developer💻.</p>
            </div>
             <div className='contact-me-container'>
                <button className='b1'
                        onClick={
                             () => window.location.href = "#aboutme" 

                        }>Veiw More...</button>
                <button  
                onClick={
                    () => window.location.href = "#contactme"
                }
                className='b2'>Contact Me</button>
            </div>
        </div>
  </div>

);
}
export default Hero;