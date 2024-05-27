import styles from './LoginPage.module.scss'

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { DataProvider } from '../../apis/apis';
import { LogInUser } from '../../apis/cases/User/Login';
import { SignUpUser } from '../../apis/cases/User/SignUp';

import { loginActions } from '../../features/login';
import { popupActions } from '../../features/popup';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export function LoginPage() {
    const state = useAppSelector(s => s.login);
    const dispath = useAppDispatch();

    function isInputValid() {
        return state.username?.length > 5 && state.password?.length > 5;
    }

    async function onLoginClick() {
        if (!isInputValid()) {
            dispath(popupActions.addWarning(
                {
                    title: 'Warning',
                    content: 'username and password length must be more then 5'
                }));

            return;
        }

        const response = await DataProvider.Execute(LogInUser(state.username, state.password));

        if (response.isSuccess) {
            DataProvider.SetNewAccessToken(response.result.accessToken);

            document.location.replace(document.location.href + '/directions');
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

        if (!isInputValid()) {
            dispath(popupActions.addWarning(
                {
                    title: 'Warning',
                    content: 'username and password length must be more then 5'
                }));

            return;
        }

        const response = await DataProvider.Execute(SignUpUser(state.username, state.password));

        if (response.isSuccess) {
            dispath(popupActions.addSuccess(
                {
                    title: 'Success',
                    content: 'You account created now. Please, login'
                }));
        }
        else {
            dispath(popupActions.addError(
                {
                    title: 'Error',
                    content: response.errorMessage,
                }));
        }
    }

    return <>

        <Header />

        <main className='main'>

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

        <Footer />
    </>
}