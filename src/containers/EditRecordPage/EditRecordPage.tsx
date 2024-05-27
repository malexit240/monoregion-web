import styles from './EditRecrodPage.module.scss';

import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { recordsActions } from '../../features/records';
import { DataProvider } from '../../apis/apis';
import { SaveRecord } from '../../apis/cases/Record/SaveRecord';
import { popupActions } from '../../features/popup';

export function EditRecrodPage() {
    const recordId = useParams().recordId as string;

    const dispatch = useAppDispatch();
    const state = useAppSelector(s => s.records);

    useEffect(() => {
        dispatch(recordsActions.loadRecord(recordId));
    }, []);

    async function onSave() {
        const response = await DataProvider.Execute(SaveRecord(
            recordId,
            state.selectedRecord?.title ?? '',
            state.selectedRecord?.content ?? '',
            state.directionId));

        if (response.isSuccess) {
            dispatch(popupActions.addSuccess({ title: 'Saved', content: 'Successfully saved the record' }));
        }
    }

    return <>

        <Header />

        <main className='main'>

            <section className='up-controls'>

                <input type='text' className={styles['title']} value={state.selectedRecord?.title}
                    onChange={e => dispatch(recordsActions.setTitle(e.target.value))}>
                </input>

                <button className='btn' onClick={onSave}>Save</button>

            </section>

            <section className={styles['editor']}>

                <textarea className={styles['textarea']}
                    placeholder='Start type...'
                    onChange={(e) => dispatch(recordsActions.setContent(e.target.value))}
                    value={state.selectedRecord?.content}>

                </textarea>

            </section>

        </main>

        <Footer />
    </>
}