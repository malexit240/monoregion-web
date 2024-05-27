import styles from './Cards.module.scss';

export function CardsContainer({ children }: { children: any }) {
    return <section className={styles['container']}>
        {children}
    </section>
}