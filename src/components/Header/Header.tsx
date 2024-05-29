import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { useAppDispatch } from '../../app/hooks';
import { rootActions } from '../../features/root';

export function Header() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('accessToken');
        dispatch(rootActions.logout());
        navigate('/');
    }

    return <header className={styles['header']}>

        <section>

            <Link to='/'>
                <p>Monoregion</p>
            </Link>

            <p className={styles['disclaimer']}>(work in progress / very early version)</p>
            <p className={styles['disclaimer']}>(backend can be unreachable)</p>

        </section>

        <button className='btn btn-inverse' onClick={logout}>Logout</button>

    </header>
}