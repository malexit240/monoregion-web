import styles from './LoginPage.module.scss'

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { DataProvider } from '../../apis/apis';
import { LogInUser } from '../../apis/cases/User/Login';
import { SignUpUser } from '../../apis/cases/User/SignUp';

import { loginActions } from '../../features/login';
import { popupActions } from '../../features/popup';

export function LoginPage() {
    const state = useAppSelector(s => s.login);
    const dispath = useAppDispatch();

    const modal = document.getElementById('modal');

    async function onLoginClick() {

        const response = await DataProvider.Execute(LogInUser(state.username, state.password));

        if (response.statusCode == 200) {
            localStorage.setItem('user', JSON.stringify(response.result));

            document.location.replace(document.location.origin + '/directions');
        }
        else {
            dispath(popupActions.addError(
                {
                    title: 'Error',
                    content: response.errorMessage
                }));
        }
    }

    async function onSignupClick() {

        try {
            const response = await DataProvider.Execute(SignUpUser(state.username, state.password));

            if (response.statusCode == 200) {
            }
            else {
            }
        } catch (error) {
            console.log(error);
        }
    }

    return <>
        <header className={styles['header']}>

            <p>Monoregion</p>

        </header>

        <main className={styles['main']}>

            <h1>Sign up</h1>

            <form className={styles['form']} onSubmitCapture={e => e.preventDefault()}>

                <label htmlFor='username'>Username</label>

                <input id='username'
                    type='text'
                    onChange={e => dispath(loginActions.changeUsername(e.target.value))}
                    value={state.username}
                />

                <label htmlFor='password'>Password</label>
                <input id='password'
                    type='password'
                    onChange={e => dispath(loginActions.changePassword(e.target.value))}
                    value={state.password}
                />

                <div className={styles['buttons']}>

                    <button className='btn' onClick={onLoginClick}>Login</button>
                    <button className='btn btn-accent' onClick={onSignupClick}>Sign up</button>

                </div>

            </form>

        </main>
    </>
}