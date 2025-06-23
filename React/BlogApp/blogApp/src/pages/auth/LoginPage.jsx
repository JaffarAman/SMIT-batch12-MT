import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { ToastAlert } from "../../utils";
import { doc, getDoc } from "firebase/firestore";

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const loginHandler = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            const uid = response.user.uid

            // get single user data
            const res = await getDoc(doc(db, "users", uid))
            const userData = res.data()

            if (userData.type === "admin") {
                navigate("/admin/dashboard")
            } else {
                navigate("/blogs")
            }

            console.log("response user", res.data())
            localStorage.setItem("user", response.user.uid)
            localStorage.setItem("userObj", JSON.stringify(userData))

            ToastAlert({
                type: "success",
                message: "USER LOGIN"
            })

        } catch (error) {
            ToastAlert({
                type: "error",
                message: error.message
            })
        }
    }

    return (
        <Stack
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
                background: "lightgrey",
                minHeight: "100vh",
            }}
        >
            <Stack
                gap={5}
                p={"30px"}
                sx={{
                    width: "50%",
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
            >
                <Typography variant="h4" sx={{ textDecoration: "underline" }}>
                    LOGIN
                </Typography>
                <TextField label="Email Address" variant="outlined" required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    required
                    type="password"
                    label="Password"
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}

                />

                <Typography variant="body2">
                    Don't have an account? <Link to="/signup">Signup</Link>
                </Typography>

                <Button variant="contained" onClick={loginHandler} >Login</Button>
            </Stack>
        </Stack>
    );
};

export default LoginPage;