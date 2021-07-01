import navstyles from '../styles/Nav.module.css';
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className={navstyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>     
        </nav>
    )
}

export default Nav
