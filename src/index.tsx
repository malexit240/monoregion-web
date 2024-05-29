import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { appRouter } from './appRouter';
import { store } from './app/store';

import reportWebVitals from './reportWebVitals';

import './styles/index.scss';
import './styles/general.scss'

import { ModalContainer } from './containers/ToastPopup/ModalContainer';
import { ModalPageContainer } from './containers/ModalPageContainer/ModalPageContainer';
import { ConnectionChecker } from './ConnectionChecker';
import { DataProvider } from './apis/apis';

const container = document.getElementById('root')!;
const root = createRoot(container);

function NoConnectionPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    DataProvider.HasConnection().then(r => {
      if (r) {
        setIsVisible(true);
      }
    });
  }, []);

  return <>
    {isVisible && <p style={{ position: 'absolute', zIndex: '2', top: '0%', backgroundColor: 'white', width: '100%', height: '100%' }}>No connection</p>}
  </>
}

root.render(
  <React.StrictMode>
    <Provider store={store}>

      <RouterProvider router={appRouter} />

      <ModalContainer />

      <ModalPageContainer />

      <ConnectionChecker />

    </Provider>
  </React.StrictMode>
);

reportWebVitals();
