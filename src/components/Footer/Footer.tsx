import styles from './Footer.module.scss';

export function Footer() {
    return <footer className={styles['footer']}>
        <p>View code of this app on <a href=''>Github</a></p>
        <p className={styles['title']}>Monoregion</p>
    </footer>
}