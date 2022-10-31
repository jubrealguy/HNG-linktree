import img from './img/Jubreel_Adebayo.jpeg';
import share from './img/share.png';

const Header=()=> {
    return (
        <header className='header'>
            <div className="share_box">
                <img id="profile_img" className="share" src={share} alt = "share btn" />
                <p className="tooltipshare">share</p>
            </div>
            <img id="profile_img" className="header__img" src={img} alt = "my pic" />
            <h1 className="header__text">Adebayo Jubreel</h1>
            <p id="slack" className='slack'>mrRealest</p>
        </header>
    )
}

export default Header;