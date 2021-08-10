import NavMenu from './nav-list/NavMenu';
import TitleImage from './title-image/TitleImage';
import Logo from './logotype/Logo';
import headerStyle from './header.module.scss';
const Header = () => {
    return (
        <div className = {headerStyle.header}>
            <NavMenu />
            <Logo />
            <TitleImage />
        </div>
    )
}

export default Header;