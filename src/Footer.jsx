import img1 from './img/vector.png';
import img3 from './img/I4G.png';

function Footer() {
    return (
        <footer className='footer'>
            <ul className="list-foot">
                <li><img src={img1} alt="Zuri Internship" /></li>
                <li className="footer-text">HNG Internship 9 Frontend Task</li>
                <li><img src={img3} alt="Ingressive" /></li>
            </ul>
        </footer>
    )
}

export default Footer;