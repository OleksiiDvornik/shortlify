// Core
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

//Engine
import { getLinks, createLink } from '../../engine/core/user/actions';
import { selectors } from '../../engine/core/user/selectors';

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
    const links = useSelector(selectors.links);
    const dispatch = useDispatch();

    const { register, handleSubmit, resetField } = useForm({
        mode: 'onBlur',
        defaultValues: {
            link: ''
        }
    });

    useEffect(() => {
        dispatch(getLinks())
    }, [dispatch])

    const inputHandler = () => {
        setInputShow(true);
    }

    const onSubmit = async (data) => {
        dispatch(createLink({from: data.link}, links));
        resetField('link');
        setInputShow(false);
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
                    <Grid item xs={6}>
                        <Typography variant='h4'>Your Links</Typography>
                    </Grid>
                    <Grid
                        item xs={6}
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
                    <Grid item xs={12}>
                        <Box component='form' onSubmit={handleSubmit(onSubmit)}>
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
                                        <InputAdornment position='end'>
                                            <IconButton
                                                onClick={inputHandler}
                                                edge='end'
                                                type='submit'
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
                    {links.length !== 0
                        ? links.map((link) => (
                            <Card data={link} key={link._id} />
                        ))
                        : <Typography component='span' sx={{marginTop: 2}}>There are no links</Typography>
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default Dashboard;