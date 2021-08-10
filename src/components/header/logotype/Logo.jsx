import logoStyle from './Logo.module.scss';

const Logo = () => {
    return (
        <div className = {logoStyle.logo}>
            <img className = {logoStyle.logo_image} src="https://clck.ru/WjFGg" alt="logo"/>
        </div>
    )
}

export default Logo;