// Core
import { BrowserRouter as Router } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

// Parts
import Header from '../components/Header';

// Helpers
import { useRoutes } from '../_helpers/hooks/useRoute';
import { theme } from '../../engine/config/theme';

const App = () => {
    const routes = useRoutes(true);

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Header isLoggedIn={true} />
                <main className='main'>
                    {routes}
                </main>
            </ThemeProvider>
        </Router>
    )
}

export default App;