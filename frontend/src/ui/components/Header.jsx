// Core
import { routes } from '../../engine/config/routes';
import { NavLink } from 'react-router-dom';

// Parts
import { AppBar, Toolbar, Container, Typography, Box, Button } from '@mui/material';

// Helpers
import {palette} from '../../engine/config/theme';

const Header = function (props) {
    const { isLoggedIn } = props;
    const { home } = routes;

    return (
        <AppBar position='static' color='transparent' sx={{boxShadow: 'none'}}>
            <Toolbar>
                <Container
                    maxWidth='lg'
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                }}>
                    <Typography
                        component={NavLink}
                        to={home}
                        variant='h5'
                        sx={{
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            color: palette.hover,
                            lineHeight: 1
                        }}
                    >
                        Shortlify
                    </Typography>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        {!isLoggedIn && <Box mr={2}>
                            <Button
                                component={NavLink}
                                to={home}
                                variant='text'
                                sx={{
                                    textTransform: 'none',
                                    fontSize: '1rem'
                                }}
                            >
                                Log in
                            </Button>
                        </Box>}
                        {!isLoggedIn && <Button
                            component={NavLink}
                            to={home}
                            variant='outlined'
                            sx={{
                                textTransform: 'none',
                                fontSize: '1rem'
                            }}
                        >
                            Sign up Free
                        </Button>}
                        {isLoggedIn && <Button
                            component={NavLink}
                            to={home}
                            variant='text'
                            sx={{
                                textTransform: 'none',
                                fontSize: '1rem'
                            }}
                        >
                            Sign out
                        </Button>}
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    )
};

export default Header;
