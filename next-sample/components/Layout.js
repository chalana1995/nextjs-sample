import styles from '../styles/Layout.module.css';
import Nav from './Nav';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div>
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
