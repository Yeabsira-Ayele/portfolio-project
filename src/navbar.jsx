import Picture from './assets/pic.jpg'
function Navbar(){
    return(
    <>
      
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
                <h2>Yeabsira Ayele</h2>
                <p> I am a Software Enginnering Student and Front End Website Developer.</p>
            </div>
    </div>
  </>

);
}
export default Navbar