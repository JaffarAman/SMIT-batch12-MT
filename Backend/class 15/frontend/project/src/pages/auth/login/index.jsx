// LoginPage.jsx
import React, { useState } from 'react';
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    Paper,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { BASE_URL } from '../../../utils';
import Cookies from "js-cookie"
import apiEndPoints from '../../../constant/apiEndpoint';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle login logic here
    //     console.log('Email:', email);
    //     console.log('Password:', password);
    // };


    const { handleSubmit, control } = useForm({
        defaultValues: {
            email: "",
            password
        }
    })

    const navigate = useNavigate()
    const onSubmit = async (obj) => {
        try {
            const response = await axios.post(`${BASE_URL}${apiEndPoints.login}`, obj)
            console.log("response", response.data.status)
            if (!response.data.status) {
                console.log("error", response.data.message)
                throw response.data.message
            }

            Cookies.set("token", response.data.token)
            if (response.data.data.type == "admin") {
                navigate("/admin-dashboard")

            } else if (response.data.data.type == "vendor") {
                navigate("/vendor-dashboard")
            } else if (response.data.data.type == "user") {
                navigate("/user-dashboard")
            }

            console.log(":status", response.data.status)

        } catch (error) {
            console.log("error", error)
        }
    }

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
                <Typography variant="h4" gutterBottom align="center">
                    Login
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                >

                    <Controller
                        name="email"
                        control={control}
                        render={({ field, formState: { errors } }) => <TextField
                            label="Email"
                            variant="outlined"
                            type="email"
                            required
                            {...field}
                        />}
                    />

                    <Controller
                        name="password"
                        control={control}
                        render={({ field, formState: { errors } }) => <TextField
                            label="Password"
                            variant="outlined"
                            type="password"
                            required
                            {...field}
                        />}
                    />
                    <Typography>
                        Create An account?
                        <Link to={"/signup"} > Signup </Link>
                    </Typography>
                    <Button variant="contained" color="primary" type="submit">
                        Login
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default Login;

// relation
// helment
// REDIS
// MicroServices