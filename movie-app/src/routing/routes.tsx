import { createBrowserRouter } from 'react-router-dom';
import GameDetailsPage from '../components/GameDetailsPage';
import Layout from '../pages/Layout';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';


const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        errorElement: <ErrorPage />,
        children: [
            { path: '', Component: HomePage },
            { path: 'GameDetailsPage/:id', Component: GameDetailsPage },
        ]
    }

]);

export default router;