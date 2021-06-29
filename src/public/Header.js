import Logo from '../public/Logo'
import Search from '../public/Search'
import UserThumbnail from '../public/UserThumbnail'
import Signin from '../public/Signin'
import './Header.css'

var isSignin = false;

function Header () {
    return (
        <div className="Header-Wrapper">
            <div className="Logo-area">
                <Logo />
            </div>
            <div className="User-area">
                <Search />
                {isSignin ? <UserThumbnail /> : <Signin />}
            </div>
        </div>
    );
}

export default Header;