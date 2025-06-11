import {
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Bounce, toast } from "react-toastify";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const signupHandler = async () => {
    // Implement signup logic here, e.g., using Firebase Auth
    console.log("Signup button clicked");
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
    try {
      setIsLoading(true);
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setIsLoading(false);
      console.log("User signed up successfully:", response.user);

      toast.success("User signed up successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.error("Error signing up:", error.message);
    }
  };
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
          Signup
        </Typography>
        <TextField
          label="Full Name"
          variant="outlined"
          required
          onChange={(e) => setFullName(e.target.value)}
        />
        <TextField
          label="Email Address"
          variant="outlined"
          required
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
          Already have an account? <Link to="/">Login</Link>
        </Typography>

        <Button
          variant="contained"
          sx={{ display: "flex", gap: 2 }}
          onClick={signupHandler}
          disabled={isLoading}
        >
          {isLoading && <CircularProgress color="white" size={"20px"} />}
          Signup
        </Button>
      </Stack>
    </Stack>
  );
};

export default Signup;