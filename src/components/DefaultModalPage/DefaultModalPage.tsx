import styles from './DefaultModelPage.module.scss'

import { modalPageActions } from '../../features/modalPage'
import { useAppDispatch } from '../../app/hooks'

interface Props {
    children: any,
    title: string,
    footer?: any,
}

export function DefaultModelPage(props: Props) {
    const dispatch = useAppDispatch();

    return <section className={styles['page']}>

        <header>

            <h1>{props.title}</h1>

        </header>

        <main>

            {props.children}

        </main>

        <footer>

            {props.footer}

            <button className='btn' onClick={() => dispatch(modalPageActions.close())}>
                Close
            </button>

        </footer>

    </section>
}