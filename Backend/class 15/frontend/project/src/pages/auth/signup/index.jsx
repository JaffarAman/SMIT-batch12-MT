import React, { useState } from 'react';
import {
    Container,
    Paper,
    Box,
    TextField,
    Button,
    Typography,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { BASE_URL } from '../../../utils';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     if (formData.password !== formData.confirmPassword) {
    //         alert('Passwords do not match');
    //         return;
    //     }

    //     // Handle signup logic here
    //     console.log('Signup Data:', formData);
    // };

    //     fullName
    // email
    // password
    // phoneNumber
    // gender
    // dob
    // type
    const { control, handleSubmit } = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            phoneNumber: "",
            gender: "",
            dob: "",
            type: "",
        }
    })


    const navigate = useNavigate()
    const onSubmit = async (obj) => {

        try {
            obj.type = "admin"
            console.log("obj", obj)
            const response = await axios.post(`${BASE_URL}/auth/signup`, obj)
            console.log("response", response)
            navigate("/otp-verify", {
                state: {
                    email: obj.email,
                    page :"signup"
                }
            })

        } catch (error) {
            console.log("error", error.message)

        }

    }

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
                <Typography variant="h4" gutterBottom align="center">
                    Sign Up
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                >

                    <Controller
                        name="fullName"
                        control={control}
                        render={({ field, formState: { errors } }) => <TextField
                            label="Full Name"
                            variant="outlined"

                            {...field}
                        />}
                    />
                    <Controller
                        name="email"
                        control={control}
                        render={({ field, formState: { errors } }) => <TextField
                            label="Email"
                            variant="outlined"

                            {...field}
                        />}
                    />


                    <Controller
                        name="password"
                        control={control}
                        render={({ field, formState: { errors } }) => <TextField
                            label="Password"
                            variant="outlined"

                            {...field}
                        />}
                    />

                    <Controller
                        name="phoneNumber"
                        control={control}
                        render={({ field, formState: { errors } }) => <TextField
                            label="Phone Number"
                            variant="outlined"

                            {...field}
                        />}
                    />


                    <Controller
                        name="gender"
                        control={control}
                        render={({ field, formState: { errors } }) => <TextField
                            label="Gender"
                            variant="outlined"

                            {...field}
                        />}
                    />

                    <Controller
                        name="dob"
                        control={control}
                        render={({ field, formState: { errors } }) => <TextField
                            label="Date of Birth"
                            variant="outlined"

                            {...field}
                        />}
                    />




                    <Typography>
                        Already Account?
                        <Link to={"/"} > Login </Link>
                    </Typography>
                    <Button variant="contained" color="primary" type="submit">
                        Sign Up
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default SignupPage;
