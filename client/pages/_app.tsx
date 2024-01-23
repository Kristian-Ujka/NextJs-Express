import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { AuthProvider } from "@/components/AuthProvider/AuthProvider";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />;
      </ThemeProvider>
    </AuthProvider>
  );
}
