import headerImageStyle from './TitleImage.module.scss';
const TitleImage = () => {
    return (
        <div className = {headerImageStyle.header_title}>
            <img className = {headerImageStyle.header_image} src="https://clck.ru/WiWfF" alt="imgTitle"/>
        </div>
    )
}

export default TitleImage;