import React, { ChangeEvent, useEffect, useState } from "react";
import style from "./LoginForm.module.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useAuth } from "../AuthProvider/AuthProvider";
import { useRouter } from "next/router";

const LoginForm = () => {
  const { login, token } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Verifica se il token esiste al momento del rendering del componente
    if (token) {
      // Se il token esiste, reindirizza alla pagina della dashboard
      /* localStorage.removeItem("token"); */
      router.push("/dashboard");
    }
  }, [token, router]);

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
          variant="outlined"
          disabled={!username || !password}
          onClick={handleLogin}
        >
          Login
        </Button>
      </form>

      <Typography mt="30px" fontSize="14px">
        Se ancora non sei registrato, registrati cliccando{" "}
        <Link href="/sign-up">qui</Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;
