import { createBrowserRouter } from 'react-router-dom';

import { NotFoundPage } from './containers/NotFoundPage/NotFoundPage';
import { LoginPage } from './containers/LoginPage/LoginPage';
import { DirectionsPage } from './containers/DirectionsPage/DirectionsPage';

export const appRouter = createBrowserRouter([
    {
        path: '/',
        Component: LoginPage,
    },
    {
        path: '/directions',
        Component: DirectionsPage,
    },
    {
        path: '*',
        Component: NotFoundPage,
    }
]);