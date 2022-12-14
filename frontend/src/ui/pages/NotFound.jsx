// Core

// Parts
import { Container, Box, Typography } from '@mui/material';

// Assets
import errorImg from '../_helpers/assets/img/404.svg';

const NotFound = function () {
    return (
        <Box
            component='section'
            sx={{
                display: 'flex',
                minHeight: 'calc(100vh - 100px)',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: '100px'
            }}
        >
            <Container
                maxWidth='lg'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Box
                    component='img'
                    src={errorImg}
                    alt=''
                    sx={{
                        display: 'block',
                        width: '400px',
                        marginBottom: '60px'
                    }}
                />
                <Typography variant='h4'>Sorry, the page not found...</Typography>
            </Container>
        </Box>
    )
}

export default NotFound;