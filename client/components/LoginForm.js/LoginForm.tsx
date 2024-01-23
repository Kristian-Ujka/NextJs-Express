import React, { ChangeEvent, useState } from "react";
import style from "./LoginForm.module.css";
import { Box, TextField } from "@mui/material";
import Link from "next/link";

const LoginForm = () => {
  const [username, setUsername] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <Box height="100%" component="div">
      <form className={style.formContainer}>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          value={username}
          onChange={handleUsername}
        />

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={password}
          onChange={handlePassword}
        />
      </form>

      <p>
        Se ancora non sei registrato, registrati cliccando{" "}
        <Link href="/sign-up">qui</Link>
      </p>
    </Box>
  );
};

export default LoginForm;
