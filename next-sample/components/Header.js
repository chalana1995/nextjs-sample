
import headerstyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerstyles.title}>
                <span>WebDev</span> News
            </h1>
            <p className={headerstyles.description}>Keep up to date with the latest web dev news</p>
        </div>
    )
}

export default Header
