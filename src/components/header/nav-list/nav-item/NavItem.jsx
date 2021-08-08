import itemStyle from './NavItem.module.scss';
const NavItem = (props) => {
    return (
        <li><a className={itemStyle.link} href={props.name}>{props.name}</a></li>
    )
}

export default NavItem;