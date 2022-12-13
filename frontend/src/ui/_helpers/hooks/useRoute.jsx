// Core
import { Routes, Route } from 'react-router-dom';
import { RoutesList } from '../../../engine/config/routes';

export const useRoutes = function (isLoggedIn) {
    const { loggedIn, loggedOut } = RoutesList;
    if (isLoggedIn) {
        return (
            <Routes>
                {loggedIn.map(item => <Route path={item.path} element={item.component} key={item.path}/>)}
            </Routes>
        )
    }
    return (
        <Routes>
            {loggedOut.map(item => <Route path={item.path} element={item.component} key={item.path}/>)}
        </Routes>
    )
}