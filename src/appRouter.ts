import { createBrowserRouter, createHashRouter } from 'react-router-dom';

import { NotFoundPage } from './containers/NotFoundPage/NotFoundPage';
import { LoginPage } from './containers/LoginPage/LoginPage';
import { DirectionsPage } from './containers/DirectionsPage/DirectionsPage';
import { RecordsPage } from './containers/RecordsPage/RecordsPage';
import { EditRecrodPage } from './containers/EditRecordPage/EditRecordPage';
import { Redirect } from './helpers/Redirect';

export const authorizedRouter = createBrowserRouter([
    {
        path: '/',
        Component: () => Redirect('/directions'),
    },
    {
        path: '/directions',
        Component: DirectionsPage,
    },
    {
        path: '/directions/:directionId?',
        Component: RecordsPage,
    },
    {
        path: '/record/:recordId?',
        Component: EditRecrodPage,
    },
    {
        path: '*',
        Component: NotFoundPage,
    }
]);

export const unauthorizedRouter = createBrowserRouter([
    {
        path: '/',
        Component: () => Redirect('/login'),
    },
    {
        path: '/login',
        Component: LoginPage,
    },
    {
        path: '*',
        Component: NotFoundPage,
    }
]);


