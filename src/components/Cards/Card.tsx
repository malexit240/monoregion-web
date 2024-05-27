import { Link } from 'react-router-dom';
import styles from './Cards.module.scss';

export function Card({ key, href, children }: { key?: string, href?: string, children?: any }) {
    return <Link key={key} className={styles['card']} to={href ?? ''}>
        {children}
    </Link>
}