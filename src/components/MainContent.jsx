import img1 from '../img/slack-logo.png';
import img2 from '../img/git-logo.jpg';

import { Link } from "react-router-dom";

function MainContent() {
    return (
        <main>
            <div className='link-box' id="twitter">
                <a href="https://twitter.com/debayo_realest" className='links'>Twitter Link</a>
            </div>
            <div className='link-box' id="btn__zuri">
                <a href="https://training.zuri.team/" className='links'>Zuri Team</a>
                </div>
            <div className='link-box' id="books">
                <a href="http://books.zuri.team" className='links'>Zuri Books</a>
                <p className="tooltip"><span>Zuri Books: </span>Find books about design and coding.</p>
            </div>
            <div className='link-box' id="book__python">
                <a href=" https://books.zuri.team/python-for-beginners?/ref_id=mrRealest" className='links'>Python Books</a>
                <p className="tooltip">Buy this book for a better understanding of python as a developer</p>
            </div>
            <div className='link-box' id="pitch">
                <a href="https://background.zuri.team" className='links'>Background Check for Coders</a>
                <p className="tooltip">For your product branding and code reviews, we are here</p>
            </div>
            <div className='link-box' id="book__design">
                <a href=" https://books.zuri.team/design-rules" className='links'>Design Books</a>
                <p className="tooltip">Learn more on design rules with us</p>
            </div>
            <div className='link-box' id="contact">
                <Link to="/contact" id="contact" className='links'>Contact Me</Link>
                <p className="tooltip">Click to contact us directly</p>
            </div>
    
            <ul className="list-logos">
                <li><img src={img1} alt="slack logo" width="45px"/></li>
                <li><img src={img2} alt="github logo" width="60px" /></li>
            </ul>
        </main>
    )
}

export default  MainContent;