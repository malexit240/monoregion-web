import styles from './Footer.module.scss';

export function Footer() {
    return <footer className={styles['footer']}>

        <section className={styles['github-references']}>
            <p>View code of frontend part on <a href='https://github.com/malexit240/monoregion-web' target='_blank'>Github</a></p>
            <p>View code of backend part on <a href='https://github.com/malexit240/monoregion-app/tree/multiuser' target='_blank'>Github</a></p>
        </section>

        <p className={styles['title']}>Monoregion</p>

    </footer>
}