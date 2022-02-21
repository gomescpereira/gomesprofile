import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import {Container, Box, CssBaseline} from "@material-ui/core";

function MyApp({ Component, pageProps }: AppProps) {
  
  return (    
               
           
              <Component {...pageProps} />
           
         );
}

export default MyApp
