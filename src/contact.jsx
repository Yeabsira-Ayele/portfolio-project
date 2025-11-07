
function Contact(){
    return(
        <div className="contact-container">
            <form className="form-container">
                <h2>Contact Me</h2>
                <input required placeholder="enter ur name"/>
                <input required placeholder="enter ur email"/>
                <textarea placeholder="Comment..." rows={15}></textarea>
                <div className="btn-send">
                    <button className="fi-btn" type="submit">Send</button>
                    <button className="se-btn" type="submit">Resend</button>
                </div>
               
            </form>
        </div>
    );
}
export default Contact;