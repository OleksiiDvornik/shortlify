// Core
import { Provider } from 'react-redux';

// Engine
import { store } from '../../engine/init/store';

// Parts
import ErrorBoundary from './ErrorBoundary';
import App from './App';

const Wrapper = () => {
    return (
        <ErrorBoundary>
            <Provider store={store}>
                <App/>
            </Provider>
        </ErrorBoundary>
    )
}

export default Wrapper;