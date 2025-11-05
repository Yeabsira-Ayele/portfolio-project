import Picture from './assets/pic.jpg'
function Navbar(){
    return(
    <div>
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
        <div className="profile-pic-container">
            <div className="pic-container">
                <img src={Picture} />
            </div>
            <div className="seif-info">
                <h2>Hello!!</h2>
                <h2>I am Yeabsira Ayele</h2>
                <p>A Software Enginnering Student and Front End Website<br></br> Developer.</p>
            </div>
             <div className='contact-me-container'>
                <button className='b1'>Veiw More...</button>
                <button className='b2'>Contact Me</button>
            </div>
            </div>
        <footer className='at-end-container'>
            <p>&#64; All rights are reserved!</p>
        </footer>
  </div>

);
}
export default Navbar