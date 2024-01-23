import React, { ChangeEvent, useState } from "react";
import style from "./LoginForm.module.css";
import { Box, Button, TextField } from "@mui/material";
import Link from "next/link";
import { useAuth } from "../AuthProvider/AuthProvider";

const LoginForm = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await login(username, password);
  };

  return (
    <Box
      height="100%"
      component="div"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <form className={style.formContainer}>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          disabled={!username || !password ? true : false}
          onClick={handleLogin}
        >
          Login
        </Button>
      </form>

      <p>
        Se ancora non sei registrato, registrati cliccando{" "}
        <Link href="/sign-up">qui</Link>
      </p>
    </Box>
  );
};

export default LoginForm;
