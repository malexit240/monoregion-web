import styles from './RecordsPage.module.scss';

import { useParams } from 'react-router-dom';

import { Header } from '../../components/Header/Header';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { recordsActions } from '../../features/records';
import { Footer } from '../../components/Footer/Footer';
import { CardsContainer } from '../../components/Cards/CardsContainer';
import { Card } from '../../components/Cards/Card';
import { modalPageActions } from '../../features/modalPage';
import { AddRecordModalPage } from '../AddRecordModalPage/AddRecordModalPage';

export function RecordsPage() {
    const directionId = useParams()?.directionId;

    const state = useAppSelector(s => s.records);
    const dispath = useAppDispatch();

    useEffect(() => {
        if (directionId != null) {
            dispath(recordsActions.loadRecords(directionId));
        }
    }, [])

    return <>

        <Header />

        <main className='main'>

            <section className={styles['controls']}>

                <h1>{state.directionName}</h1>

                <button className='btn' onClick={() => dispath(modalPageActions.open(<AddRecordModalPage />))}>Add</button>

            </section>

            <CardsContainer>

                {state.records?.map(r =>
                    <Card key={r.id} href={`/record/${r.id}`}>
                        <h2>{r.title}</h2>
                    </Card>
                )}

            </CardsContainer>

        </main>

        <Footer />
    </>
}