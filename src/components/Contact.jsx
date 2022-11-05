import Footer from "./Footer"

function Contact() {
    return (
        <main>
            <section className='contact'>
                <h2 className='contact--heading'>Contact Me</h2>
                <p className='contact--text'>Hi there, contact me to ask me about anything you have in mind</p>
                <form className='contact--form'>
                    <div className="form--name bottom">
                        <div className="form--name-first">
                            <label for="name" className="form--label">First Name</label>
                            <input type="text" className="form--input-name" id="first_name" placeholder="Enter your first name" required></input>
                        </div>
                        <div className="form--name-last">
                            <label for="name" className="form--label">Last Name</label>
                            <input type="text" className="form--input-name" id="last_name" placeholder="Enter your last name" required></input>
                        </div>
                    </div>

                    <div className="form--email bottom">
                        <label for="name" className="form--label">Email</label>
                        <input type="email" className="form--input-email" id="email" placeholder="yourname@email.com" required></input>
                    </div>

                    <div className="form--textarea bottom">
                        <label for="name" className="form--label">Message</label>
                        <textarea type="text" className="form--input-textarea" id="message" placeholder="Send me a message and I will reply you as soon as possible" required></textarea>
                    </div>

                    <div className="form--check bottom">
                        <input type="checkbox" className="check"></input>
                        <span for="name" className="check-span">You agree to providing data to who may contact you</span>
                    </div>
                    
                    <button type="submit" className="form--submit" id="submit__btn">Send message</button>
                </form>
            </section>
            <Footer />
        </main>
    )
}

export default Contact