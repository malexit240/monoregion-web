import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { appRouter } from './appRouter';
import { store } from './app/store';

import reportWebVitals from './reportWebVitals';

import './styles/index.scss';
import './styles/default.scss'

import { LoginPage } from './containers/LoginPage/LoginPage';
import { ModalContainer } from './containers/ToastPopup/ModalContainer';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LoginPage />
      {/* <RouterProvider router={appRouter} /> */}

      <ModalContainer/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
