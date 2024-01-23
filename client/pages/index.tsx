import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

export default function index() {
  const [message, setMessage] = useState("Loading");

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((responde) => responde.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
      });
  }, []);

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">
            <Link href="/login">Login</Link>
          </Button>
        </Toolbar>
      </AppBar>

      {/* Contenuto principale */}
      <Container>
        <Paper elevation={6} style={{ padding: 16, marginTop: 16 }}>
          <Typography variant="h4">
            Benvenuto nella nostra Home Page!
          </Typography>
          <Typography variant="body1">
            Questo è un esempio di come potresti strutturare la tua home page
            con Material-UI.
          </Typography>
        </Paper>
      </Container>

      {/* Footer */}
      <Box mt={4} p={2} bgcolor="primary.main" color="white" textAlign="center">
        <Typography variant="body2">
          © 2022 My Material-UI App. Tutti i diritti riservati.
        </Typography>
      </Box>
    </Box>
  );
}
