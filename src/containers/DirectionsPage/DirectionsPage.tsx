import styles from './DirectionsPage.module.scss'

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks'

import { directionsActions } from '../../features/directions';

import { modalPageActions } from '../../features/modalPage';
import { AddDirectionModalPage } from '../AddDirectionModalPage/AddDirectionModalPage';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { CardsContainer } from '../../components/Cards/CardsContainer';
import { Card } from '../../components/Cards/Card';

export function DirectionsPage() {
    const state = useAppSelector(s => s.directions);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(directionsActions.loadDirectionsAsync());
    }, []);

    return <>
        <Header />

        <main className='main'>

            <section className={styles['controls']}>

                <button
                    className={'btn ' + styles['add-direction-button']}
                    onClick={() => dispatch(modalPageActions.open(<AddDirectionModalPage />))}>Add</button>

            </section>

            <CardsContainer>

                {state.directions.map(d =>
                    <Card key={d.id} href={`/directions/${d.id}`}>
                        <h2> {d.name}</h2>
                    </Card>
                )}

            </CardsContainer>

        </main>

        <Footer />
    </>
}