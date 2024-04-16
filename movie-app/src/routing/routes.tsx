import { createBrowserRouter } from 'react-router-dom';
import GameDetailsPage from '../components/GameDetailsPage';
import Layout from '../pages/Layout';
import HomePage from '../pages/HomePage';


const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            { path: '', Component: HomePage },
            { path: 'GameDetailsPage/:id', Component: GameDetailsPage },
            // { path: 'contact', element: <Contact /> },
        ]
    }

]);

export default router;