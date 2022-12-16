// Core
import {useState} from 'react';
import { useForm } from 'react-hook-form';

// Parts
import {
    Container,
    Box,
    Grid,
    Typography,
    Button,
    TextField,
    InputAdornment,
    IconButton
} from '@mui/material';
import Card from '../components/Card';

// Assets
import AddIcon from '@mui/icons-material/Add';

const Dashboard = function () {
    const [inputShow, setInputShow] = useState(false);
    const { register, handleSubmit, resetField } = useForm({
        mode: 'onBlur',
        defaultValues: {
            link: ''
        }
    });

    const inputHandler = () => {
        setInputShow(true);
    }

    return (
        <Box
            sx={{
                minHeight: 'calc(100vh - 100px)',
                padding: '50px 0',
                borderTop: '1px solid #E8E9EB',
                background: '#f4f6fa'
            }}
        >
            <Container maxWidth='lg'>
                <Grid
                    container
                    sx={{alignItems: 'center'}}
                >
                    <Grid item md={10}>
                        <Typography variant='h4'>Your Links</Typography>
                    </Grid>
                    <Grid
                        item md={2}
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <Button
                            variant='contained'
                            onClick={inputHandler}
                        >
                            Create link
                        </Button>
                    </Grid>
                    <Grid item md={12}>
                        <Box component='form'>
                            {inputShow && <TextField
                                type='text'
                                fullWidth
                                placeholder='Enter your link'
                                variant='outlined'
                                sx={{
                                    marginTop: 2,
                                    background: '#fff'
                                }}
                                {...register('link')}
                                InputProps={{
                                    endAdornment:
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={inputHandler}
                                                edge="end"
                                            >
                                                <AddIcon />
                                            </IconButton>

                                        </InputAdornment>
                                }}
                            />}
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>

                </Grid>
            </Container>
        </Box>
    )
}

export default Dashboard;