import img from './img/Jubreel_Adebayo.jpeg';
import share from './img/share.png';

const Header=()=> {
    return (
        <header className='header'>
            <img id="profile_img" className="share" src={share} alt = "share btn" />
            <img id="profile_img" className="header__img" src={img} alt = "my pic" />
            <h1 className="header__text">Adebayo Jubreel</h1>
            <p id="slack" className='slack'>mrRealest</p>
        </header>
    )
}

export default Header;