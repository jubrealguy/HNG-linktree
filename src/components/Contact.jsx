import Footer from "./Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
    const [userName, setUserName] = useState("");
    const [LastName, setLastName] = useState("");
    const [message, setMessage] = useState("");
    const [email, setemail] = useState("");
    const [checkBox, setCheckbox] = useState(false);
    const [error, seterror] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);
    const navigate = useNavigate();

    var pattern =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(userName === "" || LastName === "" || message === "" || checkBox === false || email === "" || email != email.match(pattern)){
            seterror(true)
            console.log(error)
        }else{
            setSuccessMsg(true)
        }
    };
    const checkHandler = ()=> {
        setCheckbox(!checkBox)
    }
    const HandleSuccessMsg =()=>{
        navigate("/")
    }


    return (
        <main className="main">
            <section className='contact'>
                <h2 className='contact--heading'>Contact Me</h2>
                <p className='contact--text'>Hi there, contact me to ask me about anything you have in mind</p>
                <form className='contact--form'>
                    <div className="form--name bottom">
                        <div className="form--name-first">
                            <label for="name" className="form--label">First Name</label>
                            <input type="text" className="form--input-name form--input" id="first_name" placeholder="Enter your first name" required onChange={(e) => {
                            setUserName(e.target.value);}} />
                            {error && <div className="error-msg">Please enter your First Name</div>}
                        </div>
                        <div className="form--name-last">
                            <label for="name" className="form--label">Last Name</label>
                            <input type="text" className="form--input-name form--input" id="last_name" placeholder="Enter your last name" required onChange={(e) => {
                            setLastName(e.target.value);}} />
                            {error && <div className="error-msg">Please enter your Last Name</div>}
                        </div>
                    </div>

                    <div className="form--email bottom">
                        <label for="name" className="form--label">Email</label>
                        <input type="email" className="form--input-email form--input" id="email" placeholder="yourname@email.com" required onChange={(e) => {
                         setemail(e.target.value);}} />
                        {error && <div className="error-msg">Please enter your email</div>}
                    </div>

                    <div className="form--textarea bottom">
                        <label for="name" className="form--label">Message</label>
                        <textarea type="text" className="form--input-textarea form--input" id="message" placeholder="Send me a message and I will reply you as soon as possible..." onChange={(e) => {
                        setMessage(e.target.value);}} />
                        {error && <div className="error-msg">please enter message</div>}
                    </div>

                    <div className="form--check bottom">
                        <input type="checkbox" className="check" checked={checkBox}
                    onChange={checkHandler} required />
                        <span for="name" className="check-text" htmlFor="checkbok">You agree to providing data to who may contact you</span>
                    </div>
                    
                    <button type="submit" className="form--submit" id="btn__submit"  onClick={handleSubmit}>Send message</button>
                </form>
            </section>
            <div className="empty"></div>
            <Footer />
            {successMsg ? <div className="successMessage">
                <h4 className="successMessage--text">
                Thank You!
                </h4>
                <p className="successMessage--subtext">Message delivered successfully.</p>
                <button className="successMessage--btn" onClick={HandleSuccessMsg}>ok</button>
            </div> : ""}
        </main>
    )
}

export default Contact