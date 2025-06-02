import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

const Signup = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signupHandler = async () => {
        try {
            console.log(email, password)
            const res = await createUserWithEmailAndPassword(auth, email, password)
            console.log("Res", res)
        } catch (error) {
            console.log("error", error.message)
        }


    }
    return (
        <div>
            <input type="email" placeholder='user email'
                onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" placeholder='user password'
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={signupHandler} >Signup</button>



            {/* <div></div> */}
            {/* <Box component={"section"} >
                BOx 1
            </Box> */}

            {/* <Box component={"img"} src='/vite.svg' 
                className={style.css}
                onClick={}
            ></Box> */}

            {/* <Stack flexDirection={"row"} justifyContent={"center"} gap={2}  >
                <Box bgcolor={"red"}  >
                    Box 1
                </Box>

                <Box bgcolor={"green"} >
                    Box 2
                </Box>

                <Box bgcolor={"blue"} >
                    Box 3
                </Box>

            </Stack> */}

            {/* <Typography sx={{
                color: "red"
            }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sequi.</Typography>
            <Typography variant='subtitle1'  >HELLO WORLD</Typography>

            <TextField  label="Email Address" variant="filled" /> */}

            <Stack
                sx={{ height: "100vh" }}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Box>
                    <Typography variant="h4">Sign Up</Typography>
                </Box>
                <Box sx={{ mt: "50px" }}>
                    <TextField color="warning" sx={{ width: '300px' }} label="Enter First Name" variant="outlined" />
                </Box>
                <Box sx={{ mt: "20px" }}>
                    <TextField color="success" sx={{ width: '300px' }} label="Enter Last Name" variant="outlined" />
                </Box>
                <Box sx={{ mt: "20px" }}>
                    <TextField color="error" sx={{ width: '300px' }} label="Enter Email Address" variant="outlined" />
                </Box>
                <Box sx={{ mt: "20px" }}>
                    <TextField sx={{ width: '300px' }} label="Enter Password" variant="outlined" />
                </Box>
                <Box sx={{ mt: "20px", cursor: "pointer" }} alignContent={"start"}>
                    <Button variant="contained" sx={{ bgcolor: 'blue', width: '300px' }} size="large">Contained</Button>
                </Box>
            </Stack>
        </div>
    )
}

export default Signup
