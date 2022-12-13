// Core
import { useState } from 'react';
import { routes } from '../../engine/config/routes';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

// Parts
import {
    Container,
    Typography,
    Box,
    InputLabel,
    TextField,
    InputAdornment,
    FormHelperText,
    Button,
    IconButton
} from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const schema = yup.object().shape({
    email: yup
        .string()
        .email('Incorrect email')
        .required('Email is a required field'),
    password: yup
        .string()
        .min(6, 'The password must contain at least 6 characters')
        .required('Password is a required field')
})

const SignIn = function () {
    const [showPassword, setShowPassword] = useState(false);
    const { home, signUp } = routes;
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
        reValidateMode: 'onSubmit',
        shouldUseNativeValidation: false
    });

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = (data) => {
        console.log(data)
        // await createUser(data);
        navigate(home);
    }

    return (
        <Box
            sx={{padding: '50px 0', borderTop: '1px solid #E8E9EB'}}
        >
            <Container
                maxWidth='lg'
                sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
            >
                <Typography
                    variant='h4'
                    sx={{textAlign: 'center', marginBottom: 1}}
                >
                    Log in and start sharing
                </Typography>
                <Typography
                    variant='p'
                    sx={{marginBottom: 4}}
                >
                    Don't have an account?
                    <Typography
                        component={NavLink}
                        to={signUp}
                        sx={{marginLeft: '4px', textDecoration: 'none'}}
                    >
                        Sign Up
                    </Typography>
                </Typography>
                <Box
                    component='form'
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{width: '100%',
                        maxWidth: '460px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignContent: 'center'
                    }}
                >
                    <InputLabel htmlFor='email'>Email</InputLabel>
                    <TextField
                        type='email'
                        id='email'
                        sx={{marginBottom: 2}}
                        {...register('email')}
                    />
                    <FormHelperText id='email' sx={{margin: '-12px 0 8px', color: 'red'}}>
                        {errors?.email?.message}
                    </FormHelperText>
                    <InputLabel htmlFor='password'>Password</InputLabel>
                    <TextField
                        type={showPassword ? 'text' : 'password'}
                        id='password'
                        sx={{marginBottom: 2}}
                        {...register('password')}
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={toggleShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                        }}
                    />
                    <FormHelperText id='password' sx={{margin: '-12px 0 8px', color: 'red'}}>
                        {errors?.password?.message}
                    </FormHelperText>
                    <Button type='submit' variant='contained' size='large'>Sign up with Email</Button>
                </Box>
            </Container>
        </Box>
    )
}

export default SignIn;