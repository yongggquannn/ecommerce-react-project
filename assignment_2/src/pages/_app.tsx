import { CartProvider } from "../cart-context";
import ResponsiveAppBar from "../components/NavBar";
import * as React from 'react';
import type { AppProps } from "next/app";
import '../styles/global.css';
// import Container from '@mui/material/Container';
// import IconButton from '@mui/material/IconButton';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import { Tooltip } from '@mui/material';



export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
          <CartProvider>
            <ResponsiveAppBar {...pageProps} />
              <Component {...pageProps} />
          </CartProvider>
    </>
  );
}