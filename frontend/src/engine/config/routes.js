// Core
import { Navigate } from 'react-router-dom';

// Pages
import Home from '../../ui/pages/Home';

export const routes = {
    home: '/',
    signIn: '/sign_in',
    signUp: '/sign_up',
    notFound: '/404'
}

export const RoutesList = {
    loggedIn: [
        // {
        //     path: routes.home,
        //     component: <Dashboard/>
        // },
        // {
        //     path: routes.notFound,
        //     component: <NotFound/>
        // },
        // {
        //     path: `${routes.home}*`,
        //     component: <Navigate replace to={routes.notFound} />
        // }
    ],
    loggedOut: [
        {
            path: routes.home,
            component: <Home/>
        },
        // {
        //     path: routes.signIn,
        //     component: <SignIn/>
        // },
        // {
        //     path: routes.signUp,
        //     component: <SignUp/>
        // },
        // {
        //     path: routes.notFound,
        //     component: <NotFound/>
        // },
        {
            path: `${routes.home}*`,
            component: <Navigate replace to={routes.notFound} />
        }
    ]
}