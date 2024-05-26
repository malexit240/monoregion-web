import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks'

import { DataProvider } from '../../apis/apis';
import { GetDirections } from '../../apis/cases/Direction/GetDirections';

import { directionsActions } from '../../features/directions';

import styles from './DirectionsPage.module.scss'
import { modalPageActions } from '../../features/modalPage';
import { AddDirectionModalPage } from '../AddDirectionModalPage/AddDirectionModalPage';

export function DirectionsPage() {
    const state = useAppSelector(s => s.directions);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(directionsActions.loadDirectionsAsync());
    }, []);

    return <>
        <header className='header'>
            <p>Monoregion</p>
        </header>

        <main className='main'>

            <section className={styles['controls']}>

                <button
                    className={'btn ' + styles['add-direction-button']}
                    onClick={() => dispatch(modalPageActions.open(<AddDirectionModalPage />))}>Add</button>

            </section>

            <section className={styles['directions']}>

                {state.directions.map(d => {
                    return <article key={d.id} className={styles['direction-card']}>
                        <h2> {d.name}</h2>
                    </article>
                })}

            </section>

        </main>
    </>
}