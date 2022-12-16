// Core
import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

// Engine
import { selectors } from '../../engine/core/user/selectors';
import { authUser } from '../../engine/core/user/actions';

// Parts
import Header from '../components/Header';

// Helpers
import { useRoutes } from '../_helpers/hooks/useRoute';
import { theme } from '../../engine/config/theme';

const App = () => {
    const isLoggedIn = useSelector(selectors.isLoggedIn);
    const routes = useRoutes(isLoggedIn);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authUser());
    }, [dispatch])

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Header isLoggedIn={isLoggedIn} />
                <main className='main'>
                    {routes}
                </main>
            </ThemeProvider>
        </Router>
    )
}

export default App;