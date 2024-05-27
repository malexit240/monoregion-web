import { createBrowserRouter, createHashRouter } from 'react-router-dom';

import { NotFoundPage } from './containers/NotFoundPage/NotFoundPage';
import { LoginPage } from './containers/LoginPage/LoginPage';
import { DirectionsPage } from './containers/DirectionsPage/DirectionsPage';
import { RecordsPage } from './containers/RecordsPage/RecordsPage';
import { EditRecrodPage } from './containers/EditRecordPage/EditRecordPage';

export const appRouter = createHashRouter([
    {
        path: '/',
        Component: LoginPage,
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