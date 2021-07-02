import styles from '../styles/Layout.module.css';
import Nav from './Nav';
import Meta from './Meta';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div>
            <Meta />
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </div>

    )
}

export default Layout
