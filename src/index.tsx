import React, { useState } from 'react';
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

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>

      <RouterProvider router={appRouter} />

      <ModalContainer />

      <ModalPageContainer />

    </Provider>
  </React.StrictMode>
);

reportWebVitals();
