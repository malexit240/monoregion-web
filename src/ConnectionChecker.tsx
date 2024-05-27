import { useEffect } from 'react';
import { useAppDispatch } from './app/hooks';
import { popupActions } from './features/popup';
import { DataProvider } from './apis/apis';

export function ConnectionChecker() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setInterval(async () => {
      if (!await DataProvider.HasConnection()) {
        dispatch(popupActions.addWarning({ title: 'Warning', content: 'Unable to connect to the server. It\'s probably turned off' }));
      }
    }, 7000)
  }, []);

  return <>
  </>;
}
