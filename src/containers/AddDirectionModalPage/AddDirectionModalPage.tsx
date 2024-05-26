import { useState } from 'react';
import { DefaultModelPage } from '../../components/DefaultModalPage/DefaultModalPage';
import styles from './AddDirectionModalPage.module.scss';
import { DataProvider } from '../../apis/apis';
import { AddDirection } from '../../apis/cases/Direction/AddDirection';
import { useAppDispatch } from '../../app/hooks';
import { popupActions } from '../../features/popup';
import { modalPageActions } from '../../features/modalPage';
import { directionsActions } from '../../features/directions';

export function AddDirectionModalPage() {
    const dispath = useAppDispatch();

    const [name, setName] = useState('');

    async function addDirection() {
        if (name?.length < 1) {
            dispath(popupActions.addWarning({ title: 'Warning', content: 'Name is not seted' }));
            return;
        }

        const response = await DataProvider.Execute(AddDirection(name));

        if (response.isSuccess) {
            dispath(directionsActions.loadDirectionsAsync());

            dispath(modalPageActions.close());
        }
        else {
            dispath(popupActions.addError({ title: 'Error', content: response.errorMessage }));
        }
    }

    return <DefaultModelPage title='Add direction'
        footer={
            <button className='btn btn-accent' onClick={addDirection}>Confirm</button>
        }>

        <form className={styles['form']} onSubmitCapture={e => e.preventDefault()}>

            <label htmlFor='name'>Name</label>

            <input
                id='names'
                type='text'
                value={name}
                onChange={e => setName(e.target.value)} />

        </form>

    </DefaultModelPage>
}