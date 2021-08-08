import NavItem from './nav-item/NavItem';
import listStyle from './NavMenu.module.scss';

const NavMenu = () => {
    return (
        <ul className = {listStyle.list}>
            <NavItem name="social" />
            <NavItem name="news" />
            <NavItem name="frends" />
            <NavItem name="photo" />
        </ul>
    )
}

export default NavMenu;