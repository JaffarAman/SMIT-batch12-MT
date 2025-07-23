import React, { useState } from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography,
    Alert
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../../utils';

const OtpVerificationPage = () => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const location = useLocation()
    console.log("location", location)
    const handleChange = (e) => {
        const value = e.target.value;
        if (/^\d{0,6}$/.test(value)) {
            setOtp(value);
            setError('');
        }
    };
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (otp.length !== 6) {
            setError('OTP must be exactly 6 digits.');
            setSuccess(false);
        } else {
            // setError('');
            // setSuccess(true);
            // Here you can make an API call to verify the OTP
            const api = `${BASE_URL}/auth/otp-verification`
            const body = {
                email: location?.state?.email,
                otp: otp
            }

            const res = await axios.post(api, body)
            if (res.data.status) {

                navigate("/")
                // if(location?.state?.page == "signup"){
                //     navigate("/")
                // }else{
                //     //login
                // }
                console.log('Verifying OTP:', otp);

            } else {
                alert(res.data.message)
            }
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 8, p: 4, border: '1px solid #ccc', borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom>
                    OTP Verification
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Enter the 6-digit OTP sent to your email or phone.
                </Typography>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Enter OTP"
                                value={otp}
                                onChange={handleChange}
                                inputProps={{ maxLength: 6, inputMode: 'numeric' }}
                                error={!!error}
                            />
                        </Grid>

                        {error && (
                            <Grid item xs={12}>
                                <Alert severity="error">{error}</Alert>
                            </Grid>
                        )}
                        {/* 
                        {success && (
                            <Grid item xs={12}>
                                <Alert severity="success">OTP Verified Successfully!</Alert>
                            </Grid>
                        )} */}

                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                disabled={otp.length !== 6}
                            >
                                Verify OTP
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default OtpVerificationPage;
