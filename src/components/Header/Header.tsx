import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export function Header() {
    return <header className={styles['header']}>
        <Link to='/directions'>
            <p>Monoregion</p>
        </Link>

        <p>(work in progress / very early version)</p>
        <p>(backend can be unreachable)</p>
        
    </header>
}