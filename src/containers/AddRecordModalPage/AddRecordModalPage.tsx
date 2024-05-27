import styles from './AddRecordModalPage.module.scss';

import { DefaultModelPage } from "../../components/DefaultModalPage/DefaultModalPage";
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { recordsActions } from '../../features/records';
import { popupActions } from '../../features/popup';
import { DataProvider } from '../../apis/apis';
import { SaveRecord } from '../../apis/cases/Record/SaveRecord';
import { modalPageActions } from '../../features/modalPage';

export function AddRecordModalPage() {
    const directionId = useAppSelector(s => s.records.directionId);

    const dispatch = useAppDispatch();
    const [title, setTitle] = useState('');

    async function addRecord() {
        if (title?.length < 3) {
            dispatch(popupActions.addWarning({ title: 'Warning', content: 'Title lenght must be more than 2' }));
            return;
        }

        if (directionId) {
            const response = await DataProvider.Execute(SaveRecord(null, title, '', directionId));

            if (response.isSuccess) {
                dispatch(recordsActions.loadRecords(directionId));
                dispatch(modalPageActions.close());
            }
            else {
                dispatch(popupActions.addError({ title: 'Error', content: response.errorMessage }));
            }
        }
    }

    return <DefaultModelPage title='Type record title...'
        footer={
            <button className='btn btn-accent' onClick={addRecord}>Confirm</button>
        }>

        <form className={styles['form']} onSubmitCapture={e => e.preventDefault()}>

            <label htmlFor='title'>Title</label>

            <input id='title'
                type='title'
                value={title}
                onChange={e => setTitle(e.target.value)} />

        </form>

    </DefaultModelPage>
}