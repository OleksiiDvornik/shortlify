// Core
import { routes } from '../../engine/config/routes';
import { NavLink } from 'react-router-dom';

// Parts
import { Container, Grid, Box, Typography, Button } from '@mui/material';

// Assets
import cover from '../_helpers/assets/img/home-cover.svg';

const Home = function () {
    const { home, signUp } = routes;

    return (
        <Container maxWidth='lg'>
            <Grid
                container
                sx={{
                    minHeight: 'calc(100vh - 100px)',
                    alignContent: 'center',
                    alignItems: 'center',
                    paddingBottom: '50px'
                }}
            >
                <Grid item sm={6} xs={12}>
                    <Box>
                        <Typography
                            variant='h3'
                            sx={{fontWeight: 'bold'}}>
                            Hello, Friend!
                        </Typography>
                        <Typography
                            variant='h4'
                            sx={{fontSize: 40, marginBottom: 3}}>
                            Need to shorten your URLs?
                        </Typography>
                        <Button
                            variant='contained'
                            size='large'
                            sx={{textTransform: 'none'}}
                            component={NavLink}
                            to={signUp}
                        >Get Started for Free</Button>
                    </Box>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Box
                        component='img'
                        sx={{
                            display: 'block',
                            width: '100%',
                            maxWidth: '520px',
                            marginLeft: 'auto'
                        }}
                        src={cover}
                        alt='Homepage cover image'
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;